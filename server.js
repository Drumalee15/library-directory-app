const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const ORIGIN_URL = "http://localhost:8084";

app.use(express.json());
app.use(cors({ credentials: true, origin: ORIGIN_URL }));

// Serve images from the specified directory
app.use("/images", express.static("resources/images/books"));

// Example list of books in-stock status
let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    inStock: true,
    synopsis:
      "Set against the opulent backdrop of the Roaring Twenties, 'The Great Gatsby' tells the tragic tale of Jay Gatsby, a self-made millionaire, and his relentless pursuit of Daisy Buchanan, his lost love. This timeless story delves into themes of desire, betrayal, and the elusive nature of the American Dream. Fitzgerald's masterful portrayal of the characters and the era offers a critical examination of the pursuit of wealth and status, and the hollowness that often lies beneath.",
    imageUrl: "/images/The-Great-Gatsby.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    inStock: false,
    synopsis:
      "Harper Lee’s 'To Kill a Mockingbird' is a profound and powerful exploration of racial injustice in the Depression-era South. Through the eyes of Scout Finch, readers experience the world of Maycomb, Alabama, where her father, Atticus Finch, is tasked with defending Tom Robinson, a black man wrongfully accused of raping a white woman. The novel brilliantly captures the complexities of morality, the innocence of childhood, and the loss thereof, and challenges readers to confront their own prejudices.",
    imageUrl: "/images/To-Kill-a-Mockingbird.jpg",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    inStock: true,
    synopsis:
      "'1984' by George Orwell is a dystopian novel that presents an alarming vision of a totalitarian state where the government controls every aspect of human life, from history to thought. Winston Smith, the protagonist, navigates this oppressive world, seeking truth and individuality amidst a society plagued by surveillance, propaganda, and relentless persecution. Orwell's chilling narrative serves as a dire warning of the dangers of surrendering our freedoms in exchange for perceived security.",
    imageUrl: "/images/1984.jpg",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    inStock: true,
    synopsis:
      "J.D. Salinger's 'The Catcher in the Rye' is a seminal work that captures the angst and alienation of adolescence. Through the narrative of Holden Caulfield, a teenager navigating his way through the complexities of adulthood and societal expectations, the novel delves into themes of identity, belonging, and the painful transition from childhood to adulthood. Caulfield's journey through New York City and his candid observations on the phoniness of the adult world continue to resonate with readers of all ages.",
    imageUrl: "/images/The-Catcher-in-the-Rye.jpg",
  },
  {
    id: 5,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    inStock: false,
    synopsis:
      "'The Grapes of Wrath' by John Steinbeck is an epic portrayal of the struggles faced by the Joad family during the Great Depression as they are driven from their Oklahoma farm and forced to travel west to California in search of a better life. This powerful narrative sheds light on the harsh realities of poverty, injustice, and the struggle for survival in an indifferent world. Steinbeck's vivid depiction of the human spirit in the face of adversity is a testament to the resilience and dignity of the common man.",
    imageUrl: "/images/The-Grapes-of-Wrath.jpg",
  },
];

app.get("/books", (req, res) => {
  const query = req.query.q;
  if (query) {
    // Filter books based on the query parameter
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredBooks);
  } else {
    res.json(books);
  }
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send(`Book with id ${id} not found`);
  }
});

app.post("/books", (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    inStock: req.body.inStock,
  };
  books.push(book);
  res.status(201).json(book);
});

app.patch("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    book.inStock = req.body.inStock;
    res.json(book);
  } else {
    res.status(404).send(`Book with id ${id} not found`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
