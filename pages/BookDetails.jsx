import { bookService } from '../services/book.service.js'
const { useEffect, useState } = React

export function BookDetails({ bookId, unselectBook }) {
  const [book, setBook] = useState(null)
  useEffect(() => {
    bookService.get(bookId).then((book) => setBook(book))
  }, [])

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

  


  return (
  <section className="book-details">
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <h3>Authors : {authors}</h3>
    <h3>Released at : {publishedDate}</h3>
    <h3>Description : {description}</h3>
    <h3>Length : {pageCount}</h3>
    <h3>Categories : {categories}</h3>
    <h3>Language : {language}</h3>
    <img src={thumbnail} alt={title}/>
    <h2>Price : {price}</h2>
    <button onClick={unselectBook}>Back</button>
  </section>
  )
}
