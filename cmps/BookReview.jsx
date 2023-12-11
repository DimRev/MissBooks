import { bookService } from '../services/book.service.js'

export function BookReview({ book, updateReviews }) {
  if (!book.reviews) return <h2>No reviews</h2>

  function onRemove(reviewId) {
    console.log(reviewId);
    bookService
      .removeReview(book.id, reviewId)
      .then((book) => {
        return book
      })
      .then((book) => updateReviews(book))
      .catch((err) => {
        console.log('err:', err)
      })
  }
  return (
    <section className="book-review">
      {book.reviews.map(({ fullname, rating, readAt, id }) => (
        <article className="book-review-car" key={id}>
          <h2>{fullname}</h2>
          <h3>{rating}</h3>
          <h3>{readAt}</h3>
          <button onClick={() => onRemove(id)}>Remove</button>
        </article>
      ))}
    </section>
  )
}
