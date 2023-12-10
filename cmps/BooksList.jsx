import { BookPreview } from './BookPreview.jsx'
export function BooksList({ books }) {
  return (
    <section className="books-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookPreview book={book} />
            <button>Details</button>
          </li>
        )
      })}
    </section>
  )
}
