export function BookPreview({ book }) {
  const title = book.title
  const authors = book.authors.join(',')
  const publishedDate = book.publishedDate
  const thumbnail = book.thumbnail

  const priceAmount = book.listPrice.amount
  const pricecurrencyCode = book.listPrice.currencyCode
  const priceFormatter = new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: pricecurrencyCode,
  })
  const price = priceFormatter.format(priceAmount)

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <h2>{authors}</h2>
      <h2>{publishedDate}</h2>
      <h2>{price}</h2>
      <img src={thumbnail} alt="test" />
    </React.Fragment>
  )
}
