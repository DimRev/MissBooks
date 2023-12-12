import { BookPreview } from './BookPreview.jsx'
const { useNavigate } = ReactRouterDOM

export function BooksList({ books }) {
  const navigate = useNavigate()

  return (
    <ul className="books-list clean-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookPreview book={book}>
              <button onClick={() => navigate(`/book/${book.id}`)}>
                Details
              </button>
              <button onClick={() => navigate(`/edit/${book.id}`)}>
                Edit Book
              </button>
            </BookPreview>
          </li>
        )
      })}
    </ul>
  )
}
