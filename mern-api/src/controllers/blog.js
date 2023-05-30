const { validationResult } = require("express-validator");
let BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Karakter invalid ya");
    err.errorStatus = 400;
    err.data = errors;
    throw err;
  }
  if (!req.file) {
    const err = new Error("Image Harus di Upload !");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: { uid: 1, name: "adrianus silalahi" },
  });
  Posting.save()
    .then((result) => {
      res.status(201).json({ message: "Create Blog Post Success", data: result });
    })
    .catch((err) => {
      console.log("err : ", err);
    });
};

exports.getBlogPost = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = req.query.perPage || 5;
  let totalData;

  BlogPost.find()
    .countDocuments()
    .then((count) => {
      totalData = count;
      return BlogPost.find() //di return supaya mengembalikan promise baru agar .then dapat kita gunakan
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((result) => {
      res.status(200).json({
        message: "Data Blog Post Berhasil Dipanggil",
        data: result,
        total_data: totalData,
        per_page: perPage,
        current_page: currentPage,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getSpecifikBlogPost = (req, res, next) => {
  const id = req.params.postId;
  BlogPost.find().then((result) => {
    const getBlog = result.find((data) => data.id === id);

    if (!getBlog) {
      res.status(404).json({ message: "Account not found" });
    } else {
      res.json(getBlog);
    }
  });
};

exports.updateSpecifikBlogPost = async (req, res, next) => {
  try {
    const id = req.params.postId;
    const image = req.file.path;
    const updatedData = { ...req.body, image };
    const options = { new: true };
    //true artinya kalau data nya belum ada maka akan di create data baru

    const result = await BlogPost.findByIdAndUpdate(id, updatedData, options);
    res.status(200).send("succes update data");
    console.log(req.updatedData);
  } catch (error) {
    res.status(404).json({ message: "There is no task at that id" });
  }
};

exports.deleteSpecifikBlogPost = async (req, res, next) => {
  try {
    const id = req.params.postId;
    const removeData = req.body;

    const result = await BlogPost.findByIdAndRemove(id, removeData);
    res.status(200).send("succes delete data");
  } catch (error) {
    res.status(404).json({ message: "There is no task at that id" });
  }
};
