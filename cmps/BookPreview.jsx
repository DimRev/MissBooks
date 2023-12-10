export function BookPreview({ book }) {
  const title = book.title
  const listPrice = book.listPrice

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <h2>{listPrice}</h2>
    </React.Fragment>
  )
}
