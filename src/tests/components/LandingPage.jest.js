import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../../components/LandingPage";

describe("LandingPage Component", () => {
  test("renders the welcome message", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    expect(
      screen.getByText("Welcome to the Library Directory Application")
    ).toBeInTheDocument();
  });

  test("renders the search link correctly", () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    const searchLink = screen.getByRole("link", {
      name: "Search for your next favorite book",
    });
    expect(searchLink).toBeInTheDocument();
    expect(searchLink).toHaveAttribute("href", "/search");
  });
});
