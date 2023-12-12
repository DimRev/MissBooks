import { BooksList } from '../cmps/BooksList.jsx'
import { BooksFilter } from '../cmps/BooksFilter.jsx'
import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookIndex({ onSelectBook }) {
  const [books, setBooks] = useState(null)
  const [filterBy, setFilterBy] = useState(bookService.getFilterBy())

  useEffect(() => {
    bookService.query().then((books) => setBooks(books))
  }, [filterBy])

  function onSetFilter(filterFromEdit) {
    setFilterBy(() => {
      bookService.setFilterBy(filterFromEdit)
      return filterFromEdit
    })
  }

  return (
    <section className="books-page">
      <React.Fragment>
        <BooksFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        {books ? <BooksList books={books} /> : <div>Loading...</div>}
      </React.Fragment>
    </section>
  )
}
