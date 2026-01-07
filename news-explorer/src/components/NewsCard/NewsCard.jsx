import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // for validation
import { AuthContext } from "../../context/AuthContext";
import { SAVE_TOOLTIP_MESSAGE } from "../../utils/constants";
import "./NewsCard.css";

const NewsCard = React.memo(
  ({
    article,
    onDeleteArticle,
    showDeleteButton = false, // true on saved articles page, false on home page
    keyword,
  }) => {
    const { isLoggedIn, saveArticle, savedArticles, deleteArticle } =
      useContext(AuthContext);
    const [isArticleSaved, setIsArticleSaved] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Check if article is already saved
    useEffect(() => {
      const articleId = article._id || article.url;
      const saved = savedArticles.some(
        (saved) => (saved._id || saved.url) === articleId
      );
      setIsArticleSaved(saved);
    }, [savedArticles, article]);

    const handleSaveClick = () => {
      if (!isLoggedIn) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
        return;
      }

      const articleId = article._id || article.url;

      // If already saved, delete it
      if (isArticleSaved) {
        deleteArticle(articleId);
        return;
      }

      const articleToSave = {
        _id: article._id || article.url,
        url: article.url,
        title: article.title,
        description: article.description,
        image: article.image || article.urlToImage,
        source: article.source,
        keyword: keyword,
        date: article.publishedAt || new Date().toISOString(),
      };

      saveArticle(articleToSave, keyword);
    };

    const handleDeleteClick = () => {
      if (onDeleteArticle) {
        onDeleteArticle();
      }
    };

    const formatDate = (dateString) => {
      if (!dateString) return "No date";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };

    return (
      <article className="news-card">
        <div className="news-card__image-container">
          <img
            src={article.image || article.urlToImage}
            alt={article.title}
            className="news-card__image"
          />

          {/* Show delete button on saved articles, bookmark button on home page */}
          {showDeleteButton ? (
            <button
              className="news-card__delete-button"
              onClick={handleDeleteClick}
              aria-label="Remove article"
            >
              <span className="news-card__delete-icon"></span>
            </button>
          ) : (
            <button
              className={`news-card__bookmark-button ${
                isArticleSaved ? "news-card__bookmark-button_active" : ""
              }`}
              onClick={handleSaveClick}
              aria-label={isArticleSaved ? "Remove from saved" : "Save article"}
              onMouseEnter={() => !isLoggedIn && setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span className="news-card__bookmark-icon"></span>
            </button>
          )}

          {/* Tooltip for saving articles */}
          {!showDeleteButton && (
            <div
              className={`news-card__tooltip ${
                showTooltip && !isLoggedIn ? "news-card__tooltip_visible" : ""
              }`}
            >
              {SAVE_TOOLTIP_MESSAGE}
            </div>
          )}

          {/* Keyword only shows on saved articles page when showDeleteButton is true */}
          {keyword && (
            <div
              className={`news-card__keyword ${
                showDeleteButton ? "news-card__keyword_visible" : ""
              }`}
            >
              {keyword}
            </div>
          )}
        </div>
        {/* Makes the entire content area a clickable link to the full article */}
        <a
          className="news-card__content"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read full article"
        >
          <time className="news-card__date">
            {formatDate(article.publishedAt || article.date)}
          </time>
          <h2 className="news-card__title">{article.title}</h2>
          <p className="news-card__description">{article.description}</p>
          <span className="news-card__source">
            {article.source?.name || "Unknown Source"}
          </span>
        </a>
      </article>
    );
  }
);

NewsCard.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    urlToImage: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
    publishedAt: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  onDeleteArticle: PropTypes.func,
  showDeleteButton: PropTypes.bool,
  keyword: PropTypes.string,
};

NewsCard.displayName = "NewsCard";

export default NewsCard;
