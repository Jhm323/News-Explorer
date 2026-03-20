const BadRequestError = require("./classes/BadRequestError");
const UnauthorizedError = require("./classes/UnauthorizedError");
const ForbiddenError = require("./classes/ForbiddenError");
const NotFoundError = require("./classes/NotFoundError");
const ConflictError = require("./classes/ConflictError");

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
