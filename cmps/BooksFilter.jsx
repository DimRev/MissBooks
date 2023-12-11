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
    const field = target.name
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
  const { title, listPrice } = filterByToEdit
  return (
    <section className="books-filter">
      <h2>Book Filter</h2>
      <form onSubmit={onSetFilterBy}>
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          value={title}
          placeholder="Search"
          id="title"
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="listPrice">List Price :</label>
        <input
          type="number"
          value={listPrice || ''}
          placeholder="Search"
          id="listPrice"
          name="listPrice"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
