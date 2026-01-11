import { useState } from "react";
import PropTypes from "prop-types";
import "./Main.css";

import newsApi from "../../utils/NewsApi";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardsList from "../NewsCardsList/NewsCardsList";
import About from "../About/About";
import "../../index.css";

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
    if (!keyword.trim()) {
      setHasSearchError(true);
      setSearchPerformed(true);
      return;
    }

    setIsLoading(true);
    setSearchPerformed(true);
    setSearchKeyword(keyword);
    setHasSearchError(false);

    try {
      const data = await newsApi.searchNews(keyword);
      setSearchResults(data.articles || []);
    } catch (error) {
      console.error("Search error:", error);
      setHasSearchError(true);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleArticleAction = (article) => {
    if (isLoggedIn) {
      const isArticleSaved = savedArticles.some(
        (saved) => saved.url === article.url
        // Use url for uniqueness
      );

      if (isArticleSaved) {
        setSavedArticles(
          savedArticles.filter((saved) => saved.url !== article.url)
        );
      } else {
        setSavedArticles([...savedArticles, article]);
      }
    } else {
      console.log("User needs to log in to save articles");
    }
  };

  return (
    <section className="main">
      <section className="main__top">
        <div className="main__top-content">
          <div className="main__top-textbox">
            <h1 className="main__top-title">
              What&apos;s going on in the world?
            </h1>
            <p className="main__top-subtitle">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
          </div>
          <SearchForm onSearch={handleSearchSubmit} />
        </div>
      </section>

      {searchPerformed && (
        <section className="main__results">
          <NewsCardsList
            articles={searchResults}
            savedArticles={savedArticles}
            onArticleAction={handleArticleAction}
            isLoggedIn={isLoggedIn}
            searchKeyword={searchKeyword}
            isLoading={isLoading}
            hasSearchError={hasSearchError}
            hasSearched={searchPerformed}
            showSaveButton={true}
          />
        </section>
      )}

      <About />
    </section>
  );
}

Main.propTypes = {
  searchResults: PropTypes.array,
  setSearchResults: PropTypes.func,
  savedArticles: PropTypes.array,
  setSavedArticles: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

Main.displayName = "Main";

export default Main;
