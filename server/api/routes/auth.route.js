const express = require('express');
const authCtrl = require('../controllers/auth.controller');
const router = express.Router();

router.route('/login').post(authCtrl.login);
router.route('/login-social').post(authCtrl.socialLogin);
router.route('/signup').post(authCtrl.signup);
router.route('/email-verify').post(authCtrl.verifyEmail);
router.route('/sendEmail').post(authCtrl.sendEmail);

module.exports = router;
