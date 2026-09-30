export default class Book {
	constructor({ bookName, bookAuthor, bookStatus } = {}) {
		this.bookName = bookName
		this.bookAuthor = bookAuthor
		this.bookStatus = bookStatus

		// generate UUID
		this.bookID = crypto.randomUUID()
	}

	changeStatus(value) {
		const validStatus = ["unread", "reading", "read"]

		// little check
		if (!validStatus.includes(value)) return

		this.bookStatus = value; 
	}
}
