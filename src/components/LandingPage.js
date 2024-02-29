import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page hero">
      <div className="overlay">
        <h1 className="welcome-header">
          Welcome to the Library Directory Application
        </h1>
        <p>Discover your next favorite book with us.</p>
        <Link to="/search" className="link">
          Search for your next favorite book
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
