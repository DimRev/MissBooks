import { UserPreview } from '../cmps/UserPreview.jsx'

const { useEffect } = React

export function Home() {
  return (
    <section className="home-page">
      <h2>Miss Books</h2>
      <UserPreview />
    </section>
  )
}
