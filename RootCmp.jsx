import { BookDetails } from './pages/BookDetails.jsx'
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { bookService } from './services/book.service.js'

export function App() {
  return (
    <React.Fragment>
      <section className="app-header">
        <div className="logo">MissBooks</div>
        <nav className="pages-nav">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Books</a>
        </nav>
      </section>
      <main>
        <Home />
        <About />
        <BookIndex />
        <BookDetails />
      </main>
    </React.Fragment>
  )
}
