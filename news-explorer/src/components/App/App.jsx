import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <main className="page__main">
          <div className="page__content">
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
