import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../../components/Footer";

describe("Footer Component", () => {
  test("renders the footer with the correct text", () => {
    render(<Footer />);

    // Check for the copyright text
    const copyrightText = screen.getByText(
      /© 2024 Library Directory Application. All rights reserved./i
    );
    // Use the variable in the assertion to check if it's in the document
    expect(copyrightText).toBeInTheDocument();

    expect(document.body).toContainElement(document.querySelector(".footer"));
    expect(document.body).toContainElement(document.querySelector(".bg-dark"));
    expect(document.body).toContainElement(
      document.querySelector(".text-white")
    );

    // Assert that the copyright text is in the document
    expect(
      screen.getByText(
        /© 2024 Library Directory Application. All rights reserved./i
      )
    ).toBeInTheDocument();
  });
});
