const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const submitButton = document.querySelector("button[type='submit']");

const books = [];

function Book(title, author, pages, isRead) {
	(this.title = title), (this.author = author), (this.pages = pages), (this.isRead = isRead);
}

function addBook(title, author, pages, isRead) {
	const book = new Book(title, author, pages, isRead);
	books.push(book);
}

// addBook(title.value, author.value, pages.value, isRead.value);

function displayBook() {
	books.forEach((book, i) => {
		const bookContainer = document.createElement("div");
		const title = document.createElement("p");
		const author = document.createElement("p");
		const pages = document.createElement("p");
		const isRead = document.createElement("p");
		const removeButton = document.createElement("button");
		const toggleButton = document.createElement("button");

		title.innerText = book.title;
		author.innerText = book.author;
		pages.innerText = book.pages;
		isRead.innerText = book.isRead ? "Read" : "Not Read";
		removeButton.innerText = "Remove";
		toggleButton.innerText = "Toggle Status";

		bookContainer.className = "book-container";
		bookContainer.dataset.id = i;

		bookContainer.append(title, author, pages, isRead, removeButton, toggleButton);
		document.body.appendChild(bookContainer);

		removeButton.addEventListener("click", e => {
			books.splice(e.target.parentElement.dataset.id, 1);
			while (document.body.firstChild) {
				document.body.removeChild(document.body.firstChild);
			}
			displayBook();
		});

		toggleButton.addEventListener("click", e => {
			e.target.parentElement.dataset.id;
			books[i].isRead = !books[i].isRead;
			isRead.innerText = book.isRead ? "Read" : "Not Read";
			console.log(books[i]);
			console.log(e.target.parentElement.dataset.id);
			console.log(books);
		});
	});
}

submitButton.addEventListener("click", (e) => {
	e.preventDefault();

	addBook(title.value, author.value, pages.value, isRead.value);
   displayBook();
});


