const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className="app-header">
      <section>
        <div className="logo">MissBooks</div>
        <nav className="pages-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/book">Cars</NavLink>
        </nav>
      </section>
    </header>
  )
}
