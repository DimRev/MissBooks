const { useState, useEffect } = React

export function BooksFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffect(() => {
    onSetFilter(filterByToEdit)
  }, [filterByToEdit])

  function onSetFilterBy(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  function handleChange({ target }) {
    const field = target.id
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break

      case 'checkbox':
        value = target.checked
        break

      default:
        break
    }

    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  return (
    <section className="books-filter">
      <h2>Book Filter</h2>
      <form onSubmit={onSetFilterBy}>
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          placeholder="Search"
          id="title"
          onChange={handleChange}
        />
        <label htmlFor="listPrice">List Price :</label>
        <input
          type="number"
          placeholder="Search"
          id="listPrice"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
