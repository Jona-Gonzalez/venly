const express = require('express');
const router = express.Router();
const usersRoutes = require('./user.routes');
const webhooksRoutes = require('./webhooks.routes');

router.use('/user', usersRoutes);
router.use('/wh', webhooksRoutes);

module.exports = router;
