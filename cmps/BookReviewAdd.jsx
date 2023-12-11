const { useState } = React

import { bookService } from '../services/book.service.js'

export function BookReviewAdd({ book }) {
  const currentDate = new Date()

  // Format the date to "YYYY-MM-DD"
  const formattedDate = currentDate.toISOString().split('T')[0]
  const [review, setReview] = useState({
    fullname: '',
    rating: 0,
    readAt: formattedDate,
  })

  function onSubmit(ev) {
    ev.preventDefault()
    bookService
      .addReview(book.id, review)
      .then(() =>
        setReview({
          fullname: '',
          rating: 0,
          readAt: formattedDate,
        })
      )
      .catch((err) => {
        console.log('err:', err)
      })
  }

  function handleChange(ev) {
    const field = ev.target.name
    let value = ev.target.value

    if (ev.target.type === 'number') value = +value

    if (ev.target.type === 'number') ev.target.value = +ev.target.value
    setReview({ ...review, [field]: value })
  }

  const { fullname, rating, readAt } = review

  return (
    <article className="book-review-add">
      <form onSubmit={onSubmit}>
        <input
          value={fullname}
          onChange={handleChange}
          type="text"
          name="fullname"
          placeholder="Your Name"
        />

        <input
          value={rating}
          onChange={handleChange}
          name="rating"
          type="number"
          placeholder="Your Rating"
          min={0}
          max={5}
        />

        <input
          value={readAt}
          onChange={handleChange}
          type="date"
          name="readAt"
          placeholder="Read At"
        />
        <button>Submit</button>
      </form>
    </article>
  )
}
