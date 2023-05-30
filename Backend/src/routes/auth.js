const express = require("express")

const app = express()

const authController = require("../controllers/auth")

app.post("/register", authController.register)

module.exports = app