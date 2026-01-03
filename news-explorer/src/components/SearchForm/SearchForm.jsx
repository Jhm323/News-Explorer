import React, { useState } from "react";
import PropTypes from "prop-types"; //  for validation
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

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
