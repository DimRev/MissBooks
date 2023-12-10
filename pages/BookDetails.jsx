import { bookService } from '../services/book.service.js'
const { useEffect, useState } = React

export function BookDetails({ bookId, unselectBook }) {
  const [book, setBook] = useState(null)
  useEffect(() => {
    bookService.get(bookId).then((book) => setBook(book))
  }, [])

  if (book === null) return <div>Loading...</div>
  return (
  <section className="book-details">
    <h2>{book.title}</h2>
    <h2>{book.listPrice.amount}</h2>
    <button onClick={unselectBook}>Back</button>
  </section>
  )
}
