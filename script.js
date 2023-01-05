const books = [];

function Book(title, author, pages, isRead) {
   this.title = title,
   this.author = author,
   this.pages = pages,
   this.isRead = isRead
}

Book.prototype.info = function() {
   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "Read" : "Not Read"}`;
}

function addBook(title, author, pages, isRead) {
   const book = new Book(title, author, pages, isRead)
   books.push(book);
}

addBook("Prisoner of Azkaban", "JK Rowling", 222, false);
addBook("Sorcerer's Stone", "JK Rowling", 234, true);

function displayBook() {
   books.forEach(book => {
      const bookContainer = document.createElement("div");
      const title = document.createElement("p");
      const author = document.createElement("p")
      const pages = document.createElement("p");
      const isRead = document.createElement("p");

      title.innerText = book.title;
      author.innerText = book.author;
      pages.innerText = book.pages;
      isRead.innerText = book.isRead ? "Read" : "Not Read";

      bookContainer.className = "book-container";

      bookContainer.append(title, author, pages, isRead);
      document.body.appendChild(bookContainer);
   });
}

displayBook();


