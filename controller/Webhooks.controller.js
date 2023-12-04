const { fetchBearerToken } = require('../services/fetchToken');

const sdkVenly = require('api')('@venly/v1.0#7h9kgjolpgqpb7j');

const createWebhook = async (req, res) => {
  const {
    bearerToken: { access_token },
  } = await fetchBearerToken();

  if (!access_token) {
    res.status(401).json({
      message: 'Invalid Token',
    });
    return;
  }

  try {
    await sdkVenly.auth(access_token);
    const webhookResponse = await sdkVenly.createWebhook(
      {
        url: 'https://66df-2800-40-3e-162-4152-22e8-6d0e-185f.ngrok-free.app/v1/api/wh/events',
        authenticationMethod: {
          type: 'API_KEY',
          headerName: 'Authorization',
          apiKey: 'test',
        },
      },
      { accept: '*/*' }
    );

    console.log(webhookResponse);
    res.json({
      webhookResponse,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

//listen for webhook events
const webhookEvents = async (req, res) => {
  console.log(req.body, 'req.body');
  res.status(200).json({
    message: 'Webhook event received',
    body: req.body,
  });
};

module.exports = {
  createWebhook,
  webhookEvents,
};
