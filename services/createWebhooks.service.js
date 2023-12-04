const { fetchBearerToken } = require('./fetchToken');

const sdkVenly = require('api')('@venly/v1.0#7h9kgjolpgqpb7j');

const data = {
  url: 'string',
  authenticationMethod: {
    type: 'API_KEY',
    username: 'string',
    password: 'string',
    headerName: 'string',
    apiKey: 'string',
  },
};

const createWebhookService = async () => {
  const {
    bearerToken: { access_token },
  } = await fetchBearerToken();

  if (!access_token) {
    throw new Error('Invalid Token');
  }

  await sdkVenly.auth(access_token);

  const webhookResponse = await sdkVenly.createWebhook(
    {
      authenticationMethod: {
        type: 'API_KEY',
        apiKey:
          'OWFhODMxMzEtYzI4MC00NGMyLThjZDMtYTAwMjg2NzVkZGQxOjFRRjhreUE4NldRSWdmeUh1RU9IZzdNSGVudS96bTV6N1pJSUFPazF1eFNiL2tKeCtSRmVoU2JBVU4yZ0dtdm5zeHM9',
      },
      url: 'http://localhost:8081/v1/api/wh/create',
    },
    { accept: '*/*' }
  );

  return webhookResponse;
};

module.exports = { createWebhookService };
