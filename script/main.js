import Book from "./BookClass.js"
import addBook from "./addBook.js"

const btnAddBook = document.querySelector("#btnAddBook")

// obj arr
const library = []

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
	btnAddBook.addEventListener("click", (event) => {
		event.preventDefault()

		const inputBookName = document.querySelector("#bookName")
		const inputBookAuthor = document.querySelector("#bookAuthor")
		const radioBookChecked = document.querySelector(
			'input[name="status"]:checked',
		)

		if (
			!inputBookName.value.trim() ||
			!inputBookAuthor.value.trim() ||
			!radioBookChecked
		) {
			// erro
			console.log("Nem todos os dados foram preenchidos, parando execução...")
			return
		}

		const newBook = new Book({
			bookName: inputBookName.value,
			bookAuthor: inputBookAuthor.value,
			bookStatus: radioBookChecked.value,
		})

		// book to library
		library.push(newBook)

		// books to divs
		addBook(newBook, library)

		// reset forms value
		clearForms(inputBookName, inputBookAuthor, radioBookChecked)
	})
})

function clearForms(inputBookName, inputBookAuthor, radioBookChecked) {
	inputBookName.value = ""
	inputBookAuthor.value = ""
	radioBookChecked.checked = false
}
