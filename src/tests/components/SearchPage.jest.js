import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchPage from "../../components/SearchPage";
import mockAxios from "jest-mock-axios";

afterEach(() => {
  mockAxios.reset();
});

describe("SearchPage Component", () => {
  test("renders search input", () => {
    const { getByPlaceholderText } = render(<SearchPage />);
    expect(getByPlaceholderText("Enter book title...")).toBeInTheDocument();
  });

  test("fetches books on search term change and displays results", async () => {
    const books = [
      {
        id: 1,
        title: "Book 1",
        author: "Author 1",
        inStock: true,
        synopsis: "Synopsis 1",
        imageUrl: "url/to/image1",
      },
      // Add more book objects as needed
    ];

    const { getByPlaceholderText, getByText } = render(<SearchPage />);
    const searchInput = getByPlaceholderText("Enter book title...");

    fireEvent.change(searchInput, { target: { value: "Book" } });

    await waitFor(() =>
      expect(mockAxios.get).toHaveBeenCalledWith(`/books?q=Book`)
    );

    // Simulate axios response
    mockAxios.mockResponse({ data: books });

    await waitFor(() => {
      books.forEach((book) => {
        expect(getByText(book.title)).toBeInTheDocument();
      });
    });
  });

  test("toggles book synopsis visibility", async () => {
    const book = {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      inStock: true,
      synopsis: "Synopsis 1",
      imageUrl: "url/to/image1",
    };

    mockAxios.mockResponse({ data: [book] });

    const { getByText } = render(<SearchPage />);
    const toggleButton = getByText("Show Synopsis");

    fireEvent.click(toggleButton);

    expect(getByText(book.synopsis)).toBeInTheDocument();

    fireEvent.click(toggleButton);

    await waitFor(() => expect(getByText(book.synopsis)).not.toBeVisible());
  });
});
