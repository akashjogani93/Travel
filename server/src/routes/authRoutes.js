const express = require('express');
// const { signUp, login } = require('../controllers/authController');
const authController = require('../controllers/authController');
const authenticateJWT = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router.get('/view', authenticateJWT, authController.viewUser);

module.exports = router;
