import { BookDetails } from '../pages/BookDetails.jsx'
import { BooksList } from '../cmps/BooksList.jsx'
import { BooksFilter } from '../cmps/BooksFilter.jsx'
import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookIndex({ onSelectBook }) {
  const [books, setBooks] = useState(null)
  const [selectedBookId, setSelectedBookId] = useState(null)

  useEffect(() => {
    bookService.query().then((books) => setBooks(books))
  }, [])

  function onSelectBook(bookId) {
    setSelectedBookId(bookId)
  }

  return (
    <section className="books-page">
      {!selectedBookId && (
        <React.Fragment>
          <BooksFilter />
          {books ? (
            <BooksList books={books} onSelectBook={onSelectBook} />
          ) : (
            <div>Loading...</div>
          )}
        </React.Fragment>
      )}

      {selectedBookId && (
        <BookDetails
          bookId={selectedBookId}
          unselectBook={() => {
            setSelectedBookId(null)
          }}
        />
      )}
    </section>
  )
}
