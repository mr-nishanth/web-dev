// const router = require('express').Router();
// module.exports = router;

const authMiddleware = require('../controllers/authMiddleware');
const { isAdmin, isInstructor } = require('../controllers/rolesMiddleware');
const {
    registerUser,
    loginUser,
    getAllUsers,
    updateUser,
} = require('../controllers/user.controller');

const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.put('/update', [authMiddleware], updateUser);

router.get('/all-users', [authMiddleware, isInstructor, isAdmin], getAllUsers);

module.exports = router;
