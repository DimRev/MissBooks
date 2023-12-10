import { UserPreview } from '../cmps/UserPreview.jsx'
import { bookService } from '../services/book.service.js'

const { useEffect } = React

export function Home() {
    useEffect(()=> {
        bookService.query().then((books) => {console.log(books)})
    },[])

    return (
        <section className='home-page'>
            <h2>Home Sweet Home</h2>
            <UserPreview />
        </section>
    )
}
