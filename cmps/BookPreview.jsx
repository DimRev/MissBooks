export function BookPreview({ book }) {
  const title = book.title
  const authors = book.authors.join(',')
  const publishedDate = book.publishedDate
  const thumbnail = book.thumbnail
  const isOnSale = book.listPrice.isOnSale

  const priceAmount = book.listPrice.amount
  const pricecurrencyCode = book.listPrice.currencyCode
  const priceFormatter = new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: pricecurrencyCode,
  })
  const price = priceFormatter.format(priceAmount)

  function isOnSaleClass(isOnSale) {
    if (isOnSale) {
      return 'sale-book'
    } else {
      return ''
    }
  }

  return (
    <article className={`book-preview ${isOnSaleClass(isOnSale)}`}>
      <h2 className="book-title">{title}</h2>
      <h2 className="book-authors">{authors}</h2>
      <h2 className="book-date">{publishedDate}</h2>
      <h2 className="book-price">{price}</h2>
      <img src={thumbnail} alt="test" />
    </article>
  )
}
