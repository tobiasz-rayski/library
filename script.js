class Library {
  constructor() {
    this.bookArray = [];
  }

  fillCard(book) {
    const titleBox = document.createElement("div");
    titleBox.textContent = book.title;
    titleBox.className = "title";

    const authorBox = document.createElement("div");
    authorBox.textContent = book.author;

    const pagesBox = document.createElement("div");
    pagesBox.textContent = book.pages + " " + "pages";

    const readBox = document.createElement("div");
    readBox.textContent = book.read ? "Read" : "Not Read";

    const idNumBox = document.createElement("div");
    idNumBox.textContent = book.idNum;

    return [titleBox, authorBox, pagesBox, readBox, idNumBox];
  }

  createCard(book) {
    const library = document.getElementById("library");

    const card = document.createElement("div");
    card.className = "card";

    const cardContents = this.fillCard(book);
    cardContents.forEach((content) => card.appendChild(content));

    library.appendChild(card);
  }

  renderCards() {
    this.bookArray.forEach((book) => this.createCard(book));
  }
}

class Book {
  static idCounter = 1;

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.idNum = Book.idCounter++;
  }
}

const addButton = document.getElementById("add");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("modal-close");

const showModal = () => {
  modal.style.display = "block";
};

const hideModal = () => {
  modal.style.display = "none";
};

addButton.addEventListener("click", showModal);

closeButton.addEventListener("click", hideModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    hideModal();
  }
});

const book1 = new Book(
  "Harry Potter and The Philosopher's Stone",
  "J. K. Rowling",
  223,
  true
);

const book2 = new Book("The Game of Thrones", "George R.R. Martin", 694, false);

const library = new Library();

library.bookArray.push(book1);
library.bookArray.push(book2);
library.renderCards();
