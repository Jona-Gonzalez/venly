const router = require('express').Router();
const {
  createWebhook,
  webhookEvents,
} = require('../controller/Webhooks.controller');

router.post('/create', createWebhook);
router.post('/events', webhookEvents);

module.exports = router;
