const { Mongoose } = require('mongoose');
const postModel = require('../models/postModel')
const jwt = require('jsonwebtoken')





const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)
    if (token == null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
        return res.sendStatus(403);
    }
        req.user = decoded;
        console.log(req.user);
        next();
    })
};


const getPostController = async (req, res) => {
    authenticateToken()
    try {
        const userName = req.body.username
        const posts = await postModel.findOne({username: userName});
        console.log(posts, "mga post")
        res.status(201).json(posts.filter(posts.filter(post => post.username === req.user.username)));

    } catch (error) {
        console.error('Error fetching posts', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};


// const getPostController = async (req, res) => {
//     try {
//         authenticateToken()
//         const userName = req.body.username;
//         console.log(userName, "UN")
//         const posts = await postModel.find();
//         res.status(201).json(posts.filter(posts.filter(post => post.username === req.user.name)));
//     } catch (error) {
//         console.log(error);
//     }
// };


//add posts
const addPostController = async (req, res) => {
    try {
        const newpost = new postModel(req.body);
        await newpost.save();
        res.status(202).json("post Created Successfully!");
    } catch (error) {
        console.log(error);
        res.status(464).json({ error: "Error creating post" });
    }
};


//update posts
const editPostController = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, title } = req.body;
        const existingPost = await postModel.findByIdAndUpdate({_id:id},{ username, title },{ new: true });
        if (!existingPost) {
          return res.status(404).json({ error: 'post not found' });
        }
        res.status(200).json({ message: 'post updated successfully', data: existingPost });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    

//delete posts
const deletePostController = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params.id, "conttt");
        console.log(id, "an eya ID");
        
        if (!id) {
            return res.status(400).json({ error: "Invalid post ID" });
        }

        const deletedpost = await postModel.findByIdAndDelete(id);

        if (!deletedpost) {
            return res.status(404).json({ error: "post not found" });
        }

        res.status(200).json("post Deleted!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const getPostByIdController = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await postModel.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }




};


module.exports = {getPostController, addPostController, editPostController, deletePostController, getPostByIdController };