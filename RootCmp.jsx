import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { bookService } from './services/book.service.js'

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM
const { useState, useEffect } = React

export function App() {
  return (
    <Router>
      <AppHeader />
      <main className="main-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookIndex />} />
        </Routes>
        {/* {currentPage === 'home' && <Home />} */}
        {/* {currentPage === 'about' && <About />} */}
        {/* {currentPage === 'books' && <BookIndex />} */}
      </main>
    </Router>
  )
}
