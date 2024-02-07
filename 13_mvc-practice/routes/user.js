const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// /user
router.post('/', controller.user);

// /user/check
router.post('/check', controller.user2);

module.exports = router;