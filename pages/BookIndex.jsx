import { BooksList } from '../cmps/BooksList.jsx'
import { BooksFilter } from '../cmps/BooksFilter.jsx'
import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookIndex() {
  const [books, setBooks] = useState(null)
  useEffect(() => {
    bookService.query().then((books) => setBooks(books))
  }, [])

  return (
    <section className="books-page">
      <BooksFilter />
      {books ? <BooksList books={books} /> : <div>Loading...</div>}
    </section>
  )
}
