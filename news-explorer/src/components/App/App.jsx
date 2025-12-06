import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Example API call function
  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    setError("");
    setResults([]);
    try {
      // Replace with your News API endpoint
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        setResults(data.articles);
      } else {
        setError("No results found.");
      }
    } catch (err) {
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <main className="page__main">
          <div className="page__content">
            <SearchForm onSearch={handleSearch} loading={loading} />
            {loading && <div className="preloader">Loading...</div>}
            {error && <div className="error-message">{error}</div>}
            {results.length > 0 && (
              <section className="results">
                {results.map((article, idx) => (
                  <div key={idx} className="result-card">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                ))}
              </section>
            )}
            <About />

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/saved-news" element={<SavedNews />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
