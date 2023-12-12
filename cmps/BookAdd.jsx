export function BookAdd({ googleBooks, addGoogleBook, getGoogleBooks }) {
  

  return (
    <section className="book-add">
      <button onClick={getGoogleBooks}>Add Google Books</button>
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
