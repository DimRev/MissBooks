import { Home } from './pages/Home.jsx'

export function App() {
    return (
        <React.Fragment>
            <section className="app-header">
                <div className="logo">
                    MissBooks
                </div>
                <nav className="pages-nav">
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Books</a>
                </nav>
            </section>
            <main>
                <section className="home-section">
                    
                </section>
                <section className="about-us-page">

                </section>
                <section className="books-page">

                </section>
            </main>
        </React.Fragment>
    )
}