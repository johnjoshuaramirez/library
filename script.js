const submitButton = document.querySelector("button[type='submit']");

const removeButton = document.querySelector(".remove-button");
const books = [];

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

Book.prototype.createBook = function (id) {
	const bookContainer = document.createElement("div");
	bookContainer.className = "book-container";
	bookContainer.dataset.id = id;

	const title = document.createElement("h2");
	title.className = "book-title";
	title.innerText = this.title;
	bookContainer.appendChild(title);

	const author = document.createElement("p");
	author.className = "book-author";
	author.innerText = this.author;
	bookContainer.appendChild(author);

	const pages = document.createElement("p");
	pages.className = "book-pages";
	pages.innerText = this.pages;
	bookContainer.appendChild(pages);

	const isRead = document.createElement("p");
	isRead.className = "isRead";
	isRead.innerText = this.isRead ? "Read" : "Not Read";
	bookContainer.appendChild(isRead);

	const toggleButton = document.createElement("button");
	toggleButton.className = "toggle-button";
	toggleButton.innerText = "Toggle Status";
	bookContainer.appendChild(toggleButton);

   toggleButton.addEventListener("click", () => {
      this.isRead = !this.isRead;
      isRead.innerText = this.isRead ? "Read" : "Not Read";
      console.log(this.isRead);
   });

	const removeButton = document.createElement("button");
	removeButton.className = "remove-button";
	removeButton.innerText = "Remove";
	bookContainer.appendChild(removeButton);

	const container = document.querySelector(".container");
	container.appendChild(bookContainer);
};

// a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.

function storeBook() {
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const pages = document.querySelector("#pages").value;
	const isRead = document.querySelector("#isRead").checked;

	const book = new Book(title, author, pages, isRead);
	books.push(book);
}

const book = new Book("Harry Potter", "JK Rowling", 123, true);
books.push(book);

// a function that loops through the array and displays each book on the page.

function displayBooks(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].createBook(i);
	}
}

submitButton.addEventListener("click", e => {
	e.preventDefault();
	storeBook();
	refreshPage();
	displayBooks(books);

	console.log(books);
});

removeButton.addEventListener("click", e => {
	const id = e.target.parentElement.dataset.id;
	books.splice(id, 1);
	refreshPage();
	displayBooks();
});

function refreshPage() {
	const container = document.querySelector(".container");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}
