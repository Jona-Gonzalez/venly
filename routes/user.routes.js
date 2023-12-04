const express = require('express');
const router = express.Router();
const TokenCtr = require('../controller/GetTokenBearer.controller');

router.post('/get-token', TokenCtr);

module.exports = router;
