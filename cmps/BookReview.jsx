export function BookReview({ book }) {
  if (!book.reviews) return <h2>No reviews</h2>
  const { fullname, rating, readAt } = book.reviews
  return (
    <section className="book-review">
      {book.reviews.map(({ fullname, rating, readAt }) => (
        <article className="book-review-car">
          <h2>{fullname}</h2>
          <h3>{rating}</h3>
          <h3>{readAt}</h3>
        </article>
      ))}
    </section>
  )
}
