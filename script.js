const submitButton = document.querySelector("button[type='submit']");

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

	const title = document.createElement("h3");
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

	// a button on each book’s display to change its read status.

	const isRead = document.createElement("button");
	isRead.className = "isRead";
	isRead.innerText = this.isRead ? "Read" : "Not Read";;
	bookContainer.appendChild(isRead);

	isRead.addEventListener("click", () => {
		this.isRead = !this.isRead;
		isRead.innerText = this.isRead ? "Read" : "Not Read";
	});

	// a button on each book’s display to remove the book object.

	const removeButton = document.createElement("button");
	removeButton.className = "remove-button";
	removeButton.innerText = "×";
	bookContainer.appendChild(removeButton);

	removeButton.addEventListener("click", e => {
		const id = e.target.parentElement.dataset.id;
		books.splice(id, 1);
		refreshPage();
	});

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

// a function that loops through the array and displays each book on the page.

function displayBooks(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].createBook(i);
	}
}

function refreshPage() {
	const container = document.querySelector(".container");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	displayBooks(books);
}

submitButton.addEventListener("click", e => {
	e.preventDefault();
	storeBook();
	refreshPage();
});

const bookOne = new Book("Harry Potter", "JK Rowling", 123, false);
const bookTwo = new Book("Harry Potter", "JK Rowling", 123, false);
books.push(bookOne);
books.push(bookTwo);
displayBooks(books);
console.log(books);
