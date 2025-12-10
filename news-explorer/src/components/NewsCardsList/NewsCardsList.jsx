import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import "./NewsCardsList.css";

function NewsCardsList({
  articles,
  savedArticles,
  onArticleAction,
  isLoggedIn,
  searchKeyword,
  isLoading,
  hasSearchError,
  hasSearched,
  showSaveButton = true,
}) {
  const [visibleCount, setVisibleCount] = useState(3); // Show 3 articles initially

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3); // Show 3 more articles
  };

  if (!hasSearched) return null;

  if (isLoading) return <Preloader />;

  if (hasSearchError)
    return (
      <div className="news-cards__error">
        Sorry, something went wrong during the request.
      </div>
    );

  if (articles.length === 0)
    return <div className="news-cards__no-results">Nothing found</div>;

  return (
    <section className="news-cards">
      <div className="news-cards__container">
        <h2 className="news-cards__title">Search results</h2>

        <div className="news-cards__list">
          {articles.slice(0, visibleCount).map((article) => (
            <NewsCard
              key={article.id || article.url}
              article={article}
              isLoggedIn={isLoggedIn}
              isSaved={savedArticles.some((saved) => saved.id === article.id)}
              onArticleAction={onArticleAction}
              searchKeyword={searchKeyword}
              showSaveButton={showSaveButton}
            />
          ))}
        </div>

        {visibleCount < articles.length && (
          <button className="news-cards__more-button" onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardsList;
