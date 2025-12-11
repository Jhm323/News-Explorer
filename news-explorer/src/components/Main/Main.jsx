import React, { useState } from "react";
import "./Main.css";

import { SAMPLE_ARTICLES } from "../../utils/constants";
import SearchForm from "../SearchForm/SearchForm";
import NewsCardsList from "../NewsCardsList/NewsCardsList";
import About from "../About/About";

function Main({
  searchResults,
  setSearchResults,
  savedArticles,
  setSavedArticles,
  isLoggedIn,
}) {
  const [articles, setArticles] = useState(SAMPLE_ARTICLES);

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
      // const sampleArticles = [
      //   {
      //     id: 1,
      //     title: "Endangered Rhino Born",
      //     description: "Critically endangered rhino born at farm",
      //     url: "https://www.bbc.com/news/videos/cdd52y8nm80o",
      //     urlToImage: "https://www.bbc.com/news/videos/cdd52y8nm80o",
      //     source: { name: "BBC News" },
      //   },
      // ];

      setTimeout(() => {
        setSearchResults(SAMPLE_ARTICLES);
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
      <section className="main__top">
        <div className="main__top-content">
          <div className="main__top-textbox">
            <h1 className="main__top-title">What's going on in the world?</h1>
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
            articles={articles}
            // articles={searchResults}
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
    </main>
  );
}

export default Main;
