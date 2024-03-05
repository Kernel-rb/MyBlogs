const Post = require('../models/postModel');
const User = require('../models/userModel');
const HttpError = require('../models/errorModel');


const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Create a Post
// Post : api/posts
// Protected 
const createPost = async (req, res, next) => {
    try {
        let { title, category, description } = req.body;
        if (!title || !category || !description || !req.file) {
            const error = new HttpError('All fields are required 🦊 ', 422);
            return next(error);
        }
        const { thumbnail } = req.file;
        if (thumbnail.size > 2000000) {
            const error = new HttpError('Image size should be less than 2MB 🦊 ');
            return next(error);
        }

        let fileName = thumbnail.name;
        let splittedFilename = fileName.split('.');
        let newFilename = splittedFilename[0] + uuid();
        thumbnail.mv(path.join(__dirname, '..', '/uploads', newFilename), async (e) => {
            if (e) {
                const error = new HttpError('Image upload failed 🦊 ');
                return next(error);
            } else {
                const newPost = await Post.create({
                    title,
                    category,
                    description,
                    thumbnail: newFilename,
                    creator: req.user.id
                });
                if (!newPost) {
                    const error = new HttpError('Creating Post Failed, Please try again 🦊 ' , 422);
                    return next(error);
                }

                const currentUser = await User.findById(req.user.id);
                const userPostCount = currentUser.postCount++;
                await User.findByIdAndUpdate(req.user.id, { postCount: userPostCount });

                res.status(201).json({
                    newPost,
                    message: 'Post Created Successfully 🦊 '
                    
                });
            }

        });

    }catch(err){
        const error = new HttpError('Creating Post Failed, Please try again 🦊 ');
        return next(error);
    }
}

















// Get All Posts
// Get : api/posts
// UnProtected 
const getPosts = async (req, res, next) => {
    res.json("Get all Posts 🦊 ")
}

// Get Single Posts
// Get : api/posts/:id
// UnProtected 
const getPost = async (req, res, next) => {
    res.json("Get Single Post 🦊 ")
}

// Get Post by category
// Get : api/posts/categories/:category
// UnProtected 
const getCatPosts = async (req, res, next) => {
    res.json(" Get Posts by Category 🦊 ")
}

// Get  author posts
// Get : api/posts/users/:id
// UnProtected 
const getUserPosts = async (req, res, next) => {
    res.json(" Get User posts 🦊 ")
}

// Edit Post
// Patch : api/posts/:id
// Protected
const editPost = async (req, res, next) => {
    res.json("Edit Post 🦊 ")
}


// Delete Post
// Delete : api/posts/:id
// Protected
const deletePost = async (req, res, next) => {
    res.json("Delete Post 🦊 ")
}


module.exports = {
    createPost,
    getPosts,
    getPost,
    getCatPosts,
    getUserPosts,
    editPost,
    deletePost
}