import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <section className="search-form">
      {/* <h1 className="search-form__title">What's going on in the world?</h1>
      <p className="search-form__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p> */}
      <form className="search-form__form" onSubmit={handleSubmit}>
        <div className="search-form__controls">
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
