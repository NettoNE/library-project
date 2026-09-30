const bookPainel = document.querySelector("div.book-painel")

const statusColor = {
	unread: "#FECACA",
	reading: "#FDE68A",
	read: "#BBF7D0",
}

export default function addBook(newBook, library) {
	// create book div
	const bookDiv = document.createElement("div")

	// define bookID (HTML dataset)
	bookDiv.dataset.id = `${newBook.bookID}`

	// book div style
	Object.assign(bookDiv.style, {
		display: "flex",
		flexDirection: "column",
		width: "200px",
		height: "250px",
		borderRadius: "5px",
		backgroundColor: statusColor[newBook.bookStatus],
	})

	// book title
	const bookDivH1 = document.createElement("h1")

	// book title style
	Object.assign(bookDivH1.style, {
		margin: "0 0.5rem",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	})

	bookDivH1.textContent = newBook.bookName

	bookDiv.append(bookDivH1)

	// book author <p>
	const bookDivP = document.createElement("p")

	Object.assign(bookDivP.style, {
		margin: "0 0.5rem",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	})

	bookDivP.textContent = `by ${newBook.bookAuthor}`

	bookDiv.append(bookDivP)

	// change status button
	const changeStatusBtn = document.createElement("button")

	changeStatusBtn.textContent = `Status: ${newBook.bookStatus}`

	changeStatusBtn.addEventListener("click", (event) => {
		const actualBtn = event.currentTarget
		const actualDiv = actualBtn.closest("[data-id]")

		const id = actualDiv.dataset.id
		const actualBook = library.find((book) => book.bookID === id)

		if (actualBook.bookStatus === "read") {
			actualBook.changeStatus("unread")

			actualBtn.textContent = `Status: ${actualBook.bookStatus}`

			actualDiv.style.backgroundColor = statusColor[actualBook.bookStatus]
			return
		}

		if (actualBook.bookStatus === "unread") {
			actualBook.changeStatus("reading")

			actualBtn.textContent = `Status: ${actualBook.bookStatus}`

			actualDiv.style.backgroundColor = statusColor[actualBook.bookStatus]
			return
		}

		if (actualBook.bookStatus === "reading") {
			actualBook.changeStatus("read")

			actualBtn.textContent = `Status: ${actualBook.bookStatus}`

			actualDiv.style.backgroundColor = statusColor[actualBook.bookStatus]
			return
		}

		actualBtn.textContent = `Status: ${actualBook.bookStatus}`
	})

	Object.assign(changeStatusBtn.style, {
		backgroundColor: "#10B981",
		border: "none",
		color: "white",
		textAlign: "center",
		textDecoration: "none",
		display: "inline-block",
		fontSize: "16px",
		marginTop: "auto",
		cursor: "pointer",
		borderRadius: "5px",
		transition: "background-color 0.2s ease",
	})

	changeStatusBtn.addEventListener("mouseenter", (event) => {
		event.currentTarget.style.backgroundColor = "#059669"
	})

	changeStatusBtn.addEventListener("mouseleave", (event) => {
		event.currentTarget.style.backgroundColor = "#10B981"
	})

	bookDiv.append(changeStatusBtn)

	bookPainel.appendChild(bookDiv)
}
