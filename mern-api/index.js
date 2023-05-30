const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

//MENGATASI CORS POLICY
//memang bisa diatasi pakai liveserver tetapi solusi terbaik tetap diatasi dari back-end

// //CARA 1
// const cors = require("cors");
// app.use(cors());

//CARA 2
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  //Mengizinkan origin api kita di akses oleh sebuah url, url web mana saja yg kita izinkan (kalau * berarti semua url di izinkan untuk mengakses)
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  //Mengizinkan method yang mana saja yang mau kita izinkan
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  //Mengizinkan headers yang mana saja yang mau kita izinkan, nama-nama header nya

  next();
});

require("dotenv").config();
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const fileStorage = multer.diskStorage({
  //Nama Folder tempat menyimpan img, yaitu namanya folder images yang ada di root
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  //Format Nama File image yang disimpan, yaitu namanya time sekarang + nama asli file image nya
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")); // image yang didalam single ini artinya nama field(cth:title,body,dll) gambar di req.body nanti harus image
app.use("/images", express.static(path.join(__dirname, "images")));

const PORT = 3000;
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({
    message: message,
    data: data,
  });
});

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
