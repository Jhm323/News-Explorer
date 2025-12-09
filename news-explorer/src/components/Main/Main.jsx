import React, { useState } from "react";
import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
// import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
// import Preloader from "../Preloader/Preloader";

function Main({
  searchResults,
  setSearchResults,
  savedArticles,
  setSavedArticles,
  isLoggedIn,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [hasSearchError, setHasSearchError] = useState(false);

  const handleSearchSubmit = async (keyword) => {
    setIsLoading(true);
    setSearchPerformed(true);
    setSearchKeyword(keyword);
    setHasSearchError(false);

    try {
      const sampleArticles = [
        {
          id: 1,
          title: "Sample Article Title",
          description: "Sample article description...",
          url: "https://example.com",
          urlToImage: "https://example.com/image.jpg",
          publishedAt: "2024-01-15T10:00:00Z",
          source: { name: "Sample Source" },
        },
      ];

      setTimeout(() => {
        setSearchResults(sampleArticles);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Search error:", error);
      setHasSearchError(true);
      setIsLoading(false);
    }
  };

  const handleArticleAction = (article) => {
    if (isLoggedIn) {
      const isArticleSaved = savedArticles.some(
        (saved) => saved.id === article.id
      );

      if (isArticleSaved) {
        setSavedArticles(
          savedArticles.filter((saved) => saved.id !== article.id)
        );
      } else {
        setSavedArticles([...savedArticles, article]);
      }
    } else {
      console.log("User needs to log in to save articles");
    }
  };

  return (
    <main className="main">
      {/* Top section with search */}
      <section className="main__top">
        <div className="main__top-content">
          <div className="main__top-textbox">
            <h1 className="main__top-title">What's going on in the world?</h1>
            <p className="main__top-subtitle">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
          </div>
          <SearchForm onSearchSubmit={handleSearchSubmit} />
        </div>
      </section>

      {/* Search results section */}
      {searchPerformed && (
        <section className="main__results">
          {isLoading ? (
            <Preloader />
          ) : hasSearchError ? (
            <div className="main__results-error">
              <div className="main__results-error-icon"></div>
              <h3 className="main__results-error-title">
                Sorry, something went wrong during the request.
              </h3>
              <p className="main__results-error-text">
                There may be a connection issue or the server may be down.
                Please try again later.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="main__results-not-found">
              <div className="main__results-not-found-icon"></div>
              <h3 className="main__results-not-found-title">Nothing found</h3>
              <p className="main__results-not-found-text">
                Sorry, but nothing matched your search terms.
              </p>
            </div>
          ) : (
            <NewsCard
              articles={searchResults}
              savedArticles={savedArticles}
              onArticleAction={handleArticleAction}
              isLoggedIn={isLoggedIn}
              searchKeyword={searchKeyword}
              showSaveButton={true}
            />
          )}
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
