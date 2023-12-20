import SearchInput from '../search-input/SearchInput'
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__nav-brand">
                <h2 className="text-4xl  text-white">Movie</h2>
            </div>

            <div className='lg:flex items-center gap-4 hidden uppercase font-bold'>
                <a href="/" className='hover:border-b-2 border-white' > Home </a>
                <a href="/about"  className='hover:border-b-2 border-white'> About</a>
                <a href="/movie"  className='hover:border-b-2 border-white'> 404 </a>
            </div>
            

            <SearchInput />
        </div>
    )
}