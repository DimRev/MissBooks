const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className="app-header">
      <section>
        <div className="logo">MissBooks</div>
        <nav className="pages-nav">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/book">Books</NavLink>
        </nav>
      </section>
    </header>
  )
}
