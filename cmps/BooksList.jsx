import { BookPreview } from './BookPreview.jsx'
export function BooksList({ books, onSelectBook }) {

  return (
    <ul className="books-list clean-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookPreview book={book} />
            <button
              onClick={() => {
                onSelectBook(book.id)
              }}>
              Details
            </button>
          </li>
        )
      })}
    </ul>
  )
}
