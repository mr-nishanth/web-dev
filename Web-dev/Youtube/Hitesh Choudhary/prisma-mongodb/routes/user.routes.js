const router = require('express').Router();
const { signup } = require('../controllers/user.controller');
router.route('/signup').post(signup);
module.exports = router;
