import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { bookService } from './services/book.service.js'

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <AppHeader />
      <main className="main-layout">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookIndex />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/edit" element={<BookEdit />} />
        </Routes>
      </main>
    </Router>
  )
}
