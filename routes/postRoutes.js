const { getPostController, addPostController, editPostController, deletePostController, getPostByIdController} = require('../controllers/postController')
const express = require('express');
const router = express.Router();



router.get("/get-post", getPostController);
//METHOD - post
router.post("/add-post", addPostController);
//METHOD - put
router.put("/edit-post/:id", editPostController);

router.delete("/delete-post/:id", deletePostController);

router.get("/get-post/:id", getPostByIdController);




module.exports = router;