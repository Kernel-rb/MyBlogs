const { Router } = require('express');

const {
    createPost,
    getPosts,
    getPost,
    getCatPosts,
    getUserPosts,
    editPost,
    deletePost
}= require('../controllers/postControllers');

const authMiddleware = require('../middleware/authMiddleware');
const router = Router();

router.post('/', authMiddleware , createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/categories/:category', getCatPosts)
router.post('/users/:id', getUserPosts)
router.patch('/:id', authMiddleware, editPost)
router.post('/:id', authMiddleware , deletePost)


module.exports = router;