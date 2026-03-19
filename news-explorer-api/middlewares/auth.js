const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { UnauthorizedError } = require("../errors");
const { MESSAGES } = require("../constants");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new UnauthorizedError(MESSAGES.UNAUTHORIZED));
  }
  const token = authorization.replace("Bearer ", "");
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return next(new UnauthorizedError(MESSAGES.UNAUTHORIZED));
  }
  req.user = payload;
  return next();
};
