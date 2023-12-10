import { UserPreview } from '../cmps/UserPreview.jsx'

const { useEffect } = React

export function Home() {
  return (
    <section className="home-page">
      <h2>Home Sweet Home</h2>
      <UserPreview />
    </section>
  )
}
