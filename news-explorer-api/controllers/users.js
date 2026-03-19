const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../config');
const { MESSAGES } = require('../constants');
const { BadRequestError, ConflictError, NotFoundError } = require('../errors');

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) return next(new NotFoundError(MESSAGES.USER_NOT_FOUND));
      return res.json({ email: user.email, name: user.name });
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const { email, password, name } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => User.create({ email, password: hash, name }))
    .then((user) => res.status(201).json({ email: user.email, name: user.name }))
    .catch((err) => {
      if (err.code === 11000) return next(new ConflictError(MESSAGES.CONFLICT));
      if (err.name === 'ValidationError') return next(new BadRequestError(MESSAGES.INVALID_DATA));
      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
        expiresIn: '7d',
      });
      res.json({ token });
    })
    .catch(next);
};

module.exports = { getCurrentUser, createUser, login };
