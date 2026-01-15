import React, { useState } from "react";
import PropTypes from "prop-types"; // for validation
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import nothingFoundImg from "../../vendor/nothing-found.svg";
import {
  SEARCH_ERROR_MESSAGE,
  NO_RESULTS_MESSAGE,
} from "../../utils/constants";
import "./NewsCardsList.css";

const NewsCardsList = React.memo(
  ({
    articles,

    onArticleAction,

    searchKeyword,
    isLoading,
    hasSearchError,
    hasSearched,
    showSaveButton = true,
  }) => {
    // Show 3 articles initially
    const [visibleCount, setVisibleCount] = useState(3);

    // Show 3 more articles
    const handleShowMore = () => {
      setVisibleCount((prev) => prev + 3);
    };

    // Loading, Error, No-Results
    if (isLoading) return <Preloader />;
    if (hasSearchError)
      return <div className="news-cards__error">{SEARCH_ERROR_MESSAGE}</div>;
    if (hasSearched && articles.length === 0)
      return (
        <div className="news-cards__no-results">
          <img
            src={nothingFoundImg}
            alt="Nothing found"
            className="news-cards__no-results-image"
          />
          <h3 className="news-cards__no-results-title">Nothing found</h3>
          <p className="news-cards__no-results-description">
            {NO_RESULTS_MESSAGE}
          </p>
        </div>
      );
    return (
      <section className="news-cards">
        <h2 className="news-cards__title">Search results</h2>
        <div className="news-cards__container">
          <ul className="news-cards__list">
            {articles.slice(0, visibleCount).map((article) => (
              <li key={article.id || article.url}>
                <NewsCard
                  key={article.id || article.url}
                  article={article}
                  onDeleteArticle={onArticleAction}
                  showDeleteButton={!showSaveButton}
                  keyword={searchKeyword}
                />
              </li>
            ))}
          </ul>
          {visibleCount < articles.length && (
            <button
              className="news-cards__more-button"
              onClick={handleShowMore}
            >
              Show more
            </button>
          )}
        </div>
      </section>
    );
  }
);

NewsCardsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
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
    })
  ).isRequired,
  savedArticles: PropTypes.array,
  onArticleAction: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  searchKeyword: PropTypes.string,
  isLoading: PropTypes.bool,
  hasSearchError: PropTypes.bool,
  hasSearched: PropTypes.bool,
  showSaveButton: PropTypes.bool,
};

NewsCardsList.displayName = "NewsCardsList";

export default NewsCardsList;
