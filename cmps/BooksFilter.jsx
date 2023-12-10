export function BooksFilter({}) {
  return (
    <section className="books-filter">
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" placeholder="Search" id="title" />
        <label htmlFor="listPrice">Title</label>
        <input type="numbers" placeholder="Search" id="listPrice" />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
