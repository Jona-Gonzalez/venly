const { fetchBearerToken } = require('../services/fetchToken');

const getTokenBearer = async (req, res) => {
  const token = await fetchBearerToken();

  if (!token.status) {
    res.status(401).json({
      message: 'Invalid Token',
    });
    return;
  }

  res.json({
    token,
  });
};

module.exports = getTokenBearer;
