const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  keyword: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
  source: { type: String, required: true },
  link: { type: String, required: true, match: /^https?:\/\// },
  image: { type: String, required: true, match: /^https?:\/\// },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    select: false,
  },
});

module.exports = mongoose.model("Article", articleSchema);
