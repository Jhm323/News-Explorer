import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = React.memo(() => {
  const { user, isLoggedIn, savedArticles, deleteArticle } =
    useContext(AuthContext);

  const savedArticlesCount = savedArticles.length;

  // Get unique keywords from saved articles
  const getKeywords = () => {
    const keywords = savedArticles
      .map((article) => article.keyword || article.searchQuery)
      .filter(Boolean);
    const uniqueKeywords = [...new Set(keywords)];

    if (uniqueKeywords.length === 0) return "";
    if (uniqueKeywords.length <= 2) {
      return uniqueKeywords.join(" and ");
    } else if (uniqueKeywords.length === 3) {
      return `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${uniqueKeywords[2]}`;
    } else {
      return `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${
        uniqueKeywords.length - 2
      } others`;
    }
  };

  if (!isLoggedIn) {
    return (
      <section className="saved-news">
        <section className="saved-news__header">
          <div className="saved-news__container">
            <p className="saved-news__message">
              Please log in to view saved articles.
            </p>
          </div>
        </section>
      </section>
    );
  }

  return (
    <section className="saved-news">
      <header className="saved-news__header">
        <div className="saved-news__container">
          <p className="saved-news__subtitle">Saved articles</p>
          <h1 className="saved-news__title">
            {user?.name || "User"}, you have {savedArticlesCount} saved{" "}
            {savedArticlesCount === 1 ? "article" : "articles"}
          </h1>
          {savedArticlesCount > 0 && (
            <p className="saved-news__keywords">
              By keywords:{" "}
              <span className="saved-news__keywords-list">{getKeywords()}</span>
            </p>
          )}
        </div>
      </header>

      <section className="saved-news__content">
        <div className="saved-news__container">
          {savedArticlesCount === 0 ? (
            <div className="saved-news__empty-state">
              <h2 className="saved-news__empty-title">No saved articles</h2>
              <p className="saved-news__empty-text">
                You haven&apos;t saved any articles yet. Start browsing to save
                articles you&apos;d like to read later.
              </p>
            </div>
          ) : (
            <ul className="saved-news__cards-grid">
              {savedArticles.map((article) => (
                <li key={article._id || article.url}>
                  <NewsCard
                    article={article}
                    onDeleteArticle={() =>
                      deleteArticle(article._id || article.url)
                    }
                    isSaved={true}
                    showDeleteButton={true}
                    keyword={article.keyword}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </section>
  );
});

SavedNews.displayName = "SavedNews";

export default SavedNews;
