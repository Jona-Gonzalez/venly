const sdkVenly = require('api')('@venly/v1.0#13ljm42rlo31zoaq');

const fetchBearerToken = async () => {
  try {
    const { data: bearerToken } = await sdkVenly.bearerToken({
      grant_type: 'client_credentials',
      client_id: process.env.VENLY_CLIENT_ID,
      client_secret: process.env.VENLY_CLIENT_SECRET,
    });

    return {
      message: 'Bearer Token Fetched',
      status: true,
      bearerToken,
    };
  } catch (error) {
    console.log(error, 'error');
    return {
      message: 'Invalid Token',
      status: false,
    };
  }
};
module.exports = { fetchBearerToken };
