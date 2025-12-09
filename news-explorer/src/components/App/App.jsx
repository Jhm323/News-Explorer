import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
// import LoginModal from "../LoginModal/LoginModal";
// import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} />
        <main className="page__main">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  savedArticles={savedArticles}
                  setSavedArticles={setSavedArticles}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/saved-news"
              element={<SavedNews savedArticles={savedArticles} />}
            />
          </Routes>
        </main>
        <Footer />
        {/* <LoginModal /> */}
        {/* <RegisterModal /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
