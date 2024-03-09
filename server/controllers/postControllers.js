const Post = require('../models/postModel');
const User = require('../models/userModel');
const HttpError = require('../models/errorModel');

const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Create a Post
// Post: api/posts
// Protected 
const createPost = async (req, res, next) => {
    try {
        let { title, category, description } = req.body;
        if (!title || !category || !description || !req.files) {
            return next(new HttpError('Please fill all the fields and choose thumbnail', 422));
        }
        const { thumbnail } = req.files;
        if (thumbnail.size > 2000000) {
            return next(new HttpError('Thumbnail size should be less than 2MB', 422));
        }
        let fileName = thumbnail.name;
        let splittedFileName = fileName.split('.');
        let newFileName = splittedFileName[0] + uuidv4() + '.' + splittedFileName[splittedFileName.length - 1];
        thumbnail.mv(path.join(__dirname, `../uploads/${newFileName}`), async (err) => {
            if (err) {
                return next(new HttpError(err));
            } else {
                const newPost = await Post.create({
                    title,
                    category,
                    description,
                    thumbnail: newFileName,
                    creator: req.user.id
                });
                if (!newPost) {
                    return next(new HttpError('Post not created', 422));
                }
                const currentUser = await User.findById(req.user.id);
                if (!currentUser) {
                    return next(new HttpError('User not found', 422));
                }
                const userPostCount = currentUser.posts + 1;
                await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });
                res.status(201).json(newPost);
            }
        });
    } catch (error) {
        return next(new HttpError(error));
    }
}

// Get All Posts
// Get: api/posts
// UnProtected 
const getPosts = async (req, res, next) => {
    res.json("Get all Posts 🦊");
}

// Get Single Posts
// Get: api/posts/:id
// UnProtected 
const getPost = async (req, res, next) => {
    res.json("Get Single Post 🦊");
}

// Get Post by category
// Get: api/posts/categories/:category
// UnProtected 
const getCatPosts = async (req, res, next) => {
    res.json(" Get Posts by Category 🦊");
}

// Get  author posts
// Get: api/posts/users/:id
// UnProtected 
const getUserPosts = async (req, res, next) => {
    res.json(" Get User posts 🦊");
}

// Edit Post
// Patch: api/posts/:id
// Protected
const editPost = async (req, res, next) => {
    res.json("Edit Post 🦊");
}

// Delete Post
// Delete: api/posts/:id
// Protected
const deletePost = async (req, res, next) => {
    res.json("Delete Post 🦊");
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
