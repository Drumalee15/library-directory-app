import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Header />  */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
