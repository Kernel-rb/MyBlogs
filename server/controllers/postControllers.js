// Create a Post
// Post : api/posts
// Protected 
const createPost = async (req, res, next) => {
    res.json("Create Post 🦊 ")
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