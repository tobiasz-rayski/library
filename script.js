class Library {
  constructor() {
    this.bookArray = [];
  }
}

class Book {
  static idCounter = 0;

  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.idNum = Book.idCounter++;
  }
}

const book1 = new Book(
  "Harry Potter and The Philosopher's Stone",
  "J. K. Rowling",
  223,
  true
);

const book2 = new Book("The Game of Thrones", "George R.R. Martin", 694, false);

const library = new Library();

library.bookArray.push(book1);

console.log(library);
