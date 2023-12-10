import { BookDetails } from './pages/BookDetails.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { bookService } from './services/book.service.js'

const { useState, useEffect } = React
export function App() {
  const [currentPage, setCurrentPage] = useState('home')

  function onPageChange(page) {
    setCurrentPage(page)
  }
  return (
    <React.Fragment>
      <section className="app-header">
        <div className="logo">MissBooks</div>
        <nav className="pages-nav">
          <a href="#" onClick={()=>onPageChange('home')}>Home</a>
          <a href="#" onClick={()=>onPageChange('about')}>About us</a>
          <a href="#" onClick={()=>onPageChange('books')}>Books</a>
        </nav>
      </section>
      <main>
      {currentPage==='home' && <Home /> }
      {currentPage==='about' && <About /> }
      {currentPage==='books' && <BookIndex /> }
        <BookDetails />
      </main>
    </React.Fragment>
  )
}
