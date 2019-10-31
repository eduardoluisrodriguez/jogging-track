const express = require('express');
const expressJwt = require('express-jwt');
const fs = require('fs');
const multer = require('multer');
const config = require('../../config');

const authRoute = require('./auth.route');
const entryRoute = require('./entry.route');
const userRoute = require('./user.route');
const profileRoute = require('./profile.route');

const upload = multer({ dest: 'uploads/' });

const router = express.Router();
const authMiddleware = expressJwt({ secret: config.jwtSecret });

router.use('/auth', authRoute);
router.use('/entries', authMiddleware, entryRoute);
router.use('/users', authMiddleware, userRoute);
router.use('/profile', authMiddleware, profileRoute);

module.exports = router;
