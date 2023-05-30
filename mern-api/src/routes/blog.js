const express = require("express")
const {body} = require("express-validator")

const router = express.Router()

const blogController = require("../controllers/blog")

router.post("/post",[
    body("title").isLength({min : 5}).withMessage("Input title kurang dari 5 karakter !!"),
    body("body").isLength({min : 5}).withMessage("Input body kurang dari 5 karakter !!")],
    blogController.createBlogPost)

router.get("/posts",blogController.getBlogPost)
router.get("/post/:postId",blogController.getSpecifikBlogPost)
router.put('/post/:postId', blogController.updateSpecifikBlogPost)
router.delete('/post/:postId', blogController.deleteSpecifikBlogPost)

module.exports = router