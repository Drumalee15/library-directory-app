import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../components/Header";

describe("Header Component", () => {
  test("renders the navbar with the correct elements", () => {
    render(<Header />);

    // Check for the brand name in the Navbar
    expect(
      screen.getByText("Library Directory Application")
    ).toBeInTheDocument();

    // Check for the presence of Nav.Link with the text "Home"
    expect(screen.getByText("Home")).toBeInTheDocument();

    // Additional checks can be made for classes to ensure styling is applied
    expect(
      screen.getByText("Library Directory Application").closest("a")
    ).toHaveClass("mr-auto");
    expect(screen.getByText("Home").closest("a")).toHaveClass("mr-3", "mb-2");

    // Check for correct attributes (like href) in the Nav.Link
    expect(screen.getByText("Home")).toHaveAttribute("href", "#home");

    // Check the Navbar has the expected classes for styling
    expect(screen.getByRole("navigation")).toHaveClass("navbar", "mb-4");
    expect(screen.getByRole("navigation")).toHaveStyle(
      "backgroundColor: #5d4037"
    );
  });
});
