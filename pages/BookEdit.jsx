import { bookService } from '../services/book.service.js'

const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function BookEdit() {
  const [book, setBook] = useState(bookService.getEmptyBook())
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    if (params.bookId) loadBook()
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

  function onSubmit(ev) {
    ev.preventDefault()
    bookService
      .save(book)
      .then(() => {
        navigate('/book')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleChange(ev) {
    const field = ev.target.name
    let value = ev.target.value

    if (ev.target.type === 'number') value = +value
    if (ev.target.type === 'checkbox') value = ev.target.checked

    const currBook = { ...book }
    if (field === 'authors') {
      currBook.authors = [value]
    } else if (
      field === 'amount' ||
      field === 'currencyCode' ||
      field === 'isOnSale'
    ) {
      currBook.listPrice[field] = value
    } else {
      currBook[field] = value
    }
    setBook({ ...book, ...currBook })
    setBook((prevBook) => {
      return prevBook
    })
  }

  return (
    <section className="book-edit">
      <form onSubmit={onSubmit}>
        <label htmlFor="">Title</label>
        <input value={book.title} onChange={handleChange} type="text" name="title" />

        <label htmlFor="">Subtitle</label>
        <input value={book.subtitle} onChange={handleChange} type="text" name="subtitle" />

        <label htmlFor="">Authors</label>
        <input value={book.authors.join(',')} onChange={handleChange} type="text" name="authors" />

        <label htmlFor="">Published Date</label>
        <input value={book.publishedDate} onChange={handleChange} type="number" name="publishedDate" />

        <label htmlFor="">Description</label>
        <input value={book.description} onChange={handleChange} type="text" name="description" />

        <label htmlFor="">Thumbnail</label>
        <input value={book.thumbnail} onChange={handleChange} type="text" name="thumbnail" />

        <label htmlFor="language">Language</label>
        <select value={book.language} onChange={handleChange} name="language" id="language">
          <option value="he">Hebrew </option>
          <option value="en">English </option>
          <option value="zh">Mandarin Chinese</option>
          <option value="es">Spanish </option>
          <option value="hi">Hindi </option>
          <option value="ar">Arabic </option>
          <option value="pt">Portuguese </option>
          <option value="bn">Bengali </option>
          <option value="ru">Russian </option>
          <option value="ja">Japanese </option>
          <option value="ko">Korean </option>
        </select>

        <label htmlFor="">Price</label>
        <input value={book.listPrice.amount} onChange={handleChange} type="number" name="amount" />

        <label htmlFor="currencyCode">Currency</label>
        <select value={book.listPrice.currencyCode} onChange={handleChange} name="currencyCode" id="currencyCode">
          <option value="ILS">ILS - ₪</option>
          <option value="EUR">EUR - €</option>
          <option value="USD">USD - $</option>
          <option value="AUD">AUD - $</option>
          <option value="CAD">CAD - $</option>
          <option value="JPY">JPY - ¥</option>
          <option value="GBP">GBP - £</option>
          <option value="CNY">CNY - ¥</option>
          <option value="CHF">CHF - ₣</option>
          <option value="INR">INR - ₹</option>
          <option value="RUB">RUB - ₽</option>
        </select>

        <label htmlFor="">Sale</label>
        <input checked={book.listPrice.isOnSale} onChange={handleChange} type="checkbox" name="isOnSale" />
        <button
          type="submit"
          disabled={
            !(
              book.title &&
              book.subtitle &&
              book.authors &&
              book.publishedDate > 0 &&
              book.description &&
              book.thumbnail &&
              book.language &&
              book.listPrice.amount > 0 &&
              book.listPrice.currencyCode
            )
          }>
          Save
        </button>
      </form>
      <button
        onClick={() => {
          navigate('/book')
        }}>
        Back
      </button>
    </section>
  )
}
