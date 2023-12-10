import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { txt: '', minSpeed: 0 }
_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyBook,
  getNextBookId,
  getFilterBy,
  setFilterBy,
}

function query() {
  return storageService.query(BOOK_KEY).then((books) => {
    if (gFilterBy.txt) {
      const regex = new RegExp(gFilterBy.txt, 'i')
      books = books.filter((book) => regex.test(book.vendor))
    }
    if (gFilterBy.minSpeed) {
      books = books.filter((book) => book.maxSpeed >= gFilterBy.minSpeed)
    }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getEmptyBook(title = '', listPrice = 0) {
  //DONE : setup data structure of a book & args of the func
  return { id: '', title, listPrice }
}

function getFilterBy() {
  return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
  // TODO : setup filter inputs for books
  // if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
  // if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
  return gFilterBy
}

function getNextBookId(bookId) {
  return storageService.query(BOOK_KEY).then((books) => {
    let nextBookIdx = books.findIndex((book) => book.id === bookId) + 1
    if (nextBookIdx === books.length) nextBookIdx = 0
    return books[nextBookIdx].id
  })
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = []
    books.push(_createBook('metus hendrerit', 109))
    books.push(_createBook('harry potter', 120))
    books.push(_createBook('aragon', 220))
    utilService.saveToStorage(BOOK_KEY, books)
  }
}

function _createBook(title, listPrice = 250) {
  //TODO : change the after changing getEmptyBook data structure change the args of the func
  const book = getEmptyBook(title, listPrice)
  book.id = utilService.makeId()
  return book
}

/*//* Example of book data structure
const book = {
    id: 'OXeMG8wNskc',
    title: 'metus hendrerit',
    description: 'placerat nisi sodales suscipit tellus',
    thumbnail: 'http://ca.org/books-photos/20.jpg',
    listPrice: {
    amount: 109,
    currencyCode: 'EUR',
    isOnSale: false,
    },
}
*/
