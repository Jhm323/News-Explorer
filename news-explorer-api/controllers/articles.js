const Article = require("../models/article");
const { MESSAGES } = require("../constants");
const { NotFoundError, ForbiddenError, BadRequestError } = require("../errors");

const getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.json(articles))
    .catch(next);
};

const createArticle = (req, res, next) => {
  Article.create({ ...req.body, owner: req.user._id })
    .then((article) => {
      const { owner, ...articleData } = article.toObject();
      return res.status(201).json(articleData);
    })
    .catch((err) => {
      if (err.name === "ValidationError")
        return next(new BadRequestError(MESSAGES.INVALID_DATA));
      return next(err);
    });
};

const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId)
    .select("+owner")
    .then((article) => {
      if (!article) return next(new NotFoundError(MESSAGES.ARTICLE_NOT_FOUND));
      if (article.owner.toString() !== req.user._id) {
        return next(new ForbiddenError(MESSAGES.FORBIDDEN));
      }
      return article
        .deleteOne()
        .then(() => res.json({ message: "Article deleted" }));
    })
    .catch((err) => {
      if (err.name === "CastError")
        return next(new BadRequestError(MESSAGES.INVALID_DATA));
      return next(err);
    });
};

module.exports = { getArticles, createArticle, deleteArticle };
