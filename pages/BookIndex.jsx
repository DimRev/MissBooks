import { BooksFilter } from './BooksFilter';
import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookIndex() {
  const [books, setBooks] = useState(null)
  useEffect(()=> {
    bookService.query().then(books => setBooks(books))
},[])

  if (books === null) return <div>Loading...</div>
  return (
    <section className="books-page">
      <section className="books-filter">
        <form action="">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Search" id="title"/>
          <label htmlFor="listPrice">Title</label>
          <input type="numbers" placeholder="Search" id="listPrice"/>
          <button type="submit">Search</button>
        </form>
      </section>
      <section className="books-list">
        {books.map(({title, listPrice, id}) =>{
          return (
            <li key={id}>
              <h2>{title}</h2>
              <h2>${listPrice}</h2>
              <button>Details</button>
            </li>
          )
        })}
      </section>
    </section>
  )
}
