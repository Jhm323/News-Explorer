const { MESSAGES } = require("../constants");

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).json({
    message: statusCode === 500 ? MESSAGES.SERVER_ERROR : message,
  });
};
