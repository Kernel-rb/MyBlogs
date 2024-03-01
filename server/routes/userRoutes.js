const { Router } = require('express');
const {registerUser, loginUser, getUser, chnageAvatar, editUser, getAuthors} = require('../controllers/userControllers');
const authMiddleware = require('../middleware/authMiddleware');
const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser); 
router.get('/:id', getUser);
router.post('/change-avatar', authMiddleware  , chnageAvatar);
router.patch('/edit-user', editUser);
router.get('/', getAuthors);


module.exports = router;