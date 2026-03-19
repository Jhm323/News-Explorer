const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { UnauthorizedError } = require("../errors");
const { MESSAGES } = require("../constants");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = async function findUserByCredentials(
  email,
  password,
) {
  const user = await this.findOne({ email }).select("+password");
  if (!user) throw new UnauthorizedError(MESSAGES.INVALID_CREDENTIALS);
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) throw new UnauthorizedError(MESSAGES.INVALID_CREDENTIALS);
  return user;
};

module.exports = mongoose.model("User", userSchema);
