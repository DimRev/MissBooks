import { BookPreview } from './BookPreview.jsx'
export function BooksList({ books, onSelectBook }) {

  return (
    <section className="books-list">
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
    </section>
  )
}
