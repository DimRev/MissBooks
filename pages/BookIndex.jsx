import { BookDetails } from '../pages/BookDetails.jsx'
import { BooksList } from '../cmps/BooksList.jsx'
import { BooksFilter } from '../cmps/BooksFilter.jsx'
import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookIndex({ onSelectBook }) {
  const [books, setBooks] = useState(null)
  useEffect(() => {
    bookService.query().then((books) => setBooks(books))
  }, [])

  function onSelectBook(bookId) {
    
  }

  return (
    <section className="books-page">
      <BooksFilter />
      {books ? (
        <BooksList books={books} onSelectBook={onSelectBook} />
      ) : (
        <div>Loading...</div>
      )}

      <BookDetails />
    </section>
  )
}
