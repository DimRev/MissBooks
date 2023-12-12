import { BookAdd } from '../cmps/BookAdd.jsx'
import { BooksList } from '../cmps/BooksList.jsx'
import { BooksFilter } from '../cmps/BooksFilter.jsx'
import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React

export function BookIndex() {
  const [books, setBooks] = useState(null)
  const [googleBooks, setGoogleBooks] = useState(null)
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

  function getGoogleBooks(searchBook) {
    bookService.queryGoogleBooks(searchBook).then((googleBooks) => {
      setGoogleBooks(googleBooks.items)
    })
    bookService.query().then((books) => {
      console.log(books)
    })
  }

  function addGoogleBook(googleBook) {
    console.log('BookAdd.jsx - addGoogleBook()', googleBook)
    bookService.addGoogleBook(googleBook).then((book) => {
      setBooks((prevBooks) => [book, ...prevBooks])
    })
  }

  return (
    <section className="books-page">
      <React.Fragment>
        <BooksFilter filterBy={filterBy} onSetFilter={onSetFilter} />
        <BookAdd
          googleBooks={googleBooks}
          setGoogleBooks={setGoogleBooks}
          getGoogleBooks={getGoogleBooks}
          addGoogleBook={addGoogleBook}
        />
        {books ? <BooksList books={books} /> : <div>Loading...</div>}
      </React.Fragment>
    </section>
  )
}
