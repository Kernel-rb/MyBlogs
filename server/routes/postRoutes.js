const { Router } = require('express');

const {
    createPost,
    getPosts,
    getPost,
    getCatPosts,
    getUserPosts,
    editPost,
    deletePost
}= require('../,controllers/postController');

const router = Router();

router.post('/', createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/categories/:category', getCatPosts)
router.post('/users/:id', getUserPosts)
router.patch('/:id', editPost)
router.post('/:id', deletePost)


module.exports = router;