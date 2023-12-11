import { BookPreview } from './BookPreview.jsx'
export function BooksList({ books }) {
  return (
    <ul className="books-list clean-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookPreview book={book} />
            <button>Details</button>
          </li>
        )
      })}
    </ul>
  )
}
