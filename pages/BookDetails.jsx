import { BookReview } from '../cmps/BookReview.jsx';
import { bookService } from '../services/book.service.js'

const { useParams, useNavigate, Link } = ReactRouterDOM

const { useState, useEffect } = React

export function BookDetails() {
  const [book, setBook] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadBook()
  }, [params.bookId])

  function loadBook() {
    bookService
      .get(params.bookId)
      .then((book) => setBook(book))
      .catch((err) => {
        console.log('err:', err)
        navigate('/')
      })
  }

  if (book === null) return <div>Loading...</div>

  const title = book.title
  const subtitle = book.subtitle
  const authors = book.authors.join(',')
  const publishedDate = book.publishedDate
  const description = book.description
  const pageCount = book.pageCount
  const categories = book.categories.join(',')
  const thumbnail = book.thumbnail
  const language = book.language
  const isOnSale = book.listPrice.isOnSale

  const priceAmount = book.listPrice.amount
  const pricecurrencyCode = book.listPrice.currencyCode
  const priceFormatter = new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: pricecurrencyCode,
  })
  const price = priceFormatter.format(priceAmount)

  function pageCountComment(pageCount) {
    if (+pageCount > 500) return 'Serious Reading'
    if (+pageCount > 200) return 'Descent Reading'
    return 'Light Reading'
  }

  function publishedDateComment(publishedDate) {
    if (+publishedDate > 10) return 'Vintage'
    return 'New'
  }

  function priceColorClass(priceAmount) {
    if (+priceAmount > 150) return 'price-red'
    if (+priceAmount < 20) return 'price-green'
    return ''
  }

  function isOnSaleClass(isOnSale) {
    if (isOnSale) return 'sale-book'
    return ''
  }
  return (
    <article className={`book-details ${isOnSaleClass(isOnSale)}`}>
      <h2 className="book-title">{title}</h2>
      <h3 className="book-authors">Authors : {authors}</h3>
      <h3 className="book-subtitle">{subtitle}</h3>
      <h3 className="book-content">Description : {description}</h3>
      <h3 className="book-date">
        Released at : {publishedDate} ({publishedDateComment()})
      </h3>
      <h3 className="book-pages">
        Length : {pageCount} ({pageCountComment()})
      </h3>
      <h3 className="book-categories">Categories : {categories}</h3>
      <h3 className="book-language">Language : {language}</h3>
      <img src={thumbnail} alt={title} />
      <h2 className={`book-price ${priceColorClass(priceAmount)}`}>
        Price : {price}
      </h2>
      <button>Add Review</button>
      <BookReview book={book}/>
      <button onClick={() => navigate('/book')}>Back</button>
    </article>
  )
}
