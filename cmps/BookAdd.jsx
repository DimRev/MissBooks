const { useState } = React

export function BookAdd({ googleBooks, addGoogleBook, getGoogleBooks }) {
  const [searchBook, setSearchBooks] = useState('')

  function onSubmitHandle(ev) {
    ev.preventDefault()
    getGoogleBooks(searchBook)
  }

  function onBookSearchParam(ev) {
    const value = ev.target.value
    setSearchBooks(value)
  }

  return (
    <section className="book-add">
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          onChange={onBookSearchParam}
          name="book-search-param"
        />
        <button>Search Google Books</button>
      </form>
      <ul>
        {googleBooks &&
          googleBooks.map((googleBook) => (
            <li key={googleBook.id}>
              <button onClick={() => addGoogleBook(googleBook)}>+</button>
              {googleBook.volumeInfo.title}
            </li>
          ))}
      </ul>
    </section>
  )
}
