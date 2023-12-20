import SearchInput from '../search-input/SearchInput'
import logo from '/src/assets/images/logo.png';
import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__nav-brand">
                <img src={logo} className="w-16" alt="" />
                <h2 className="text-2xl max-sm:hidden bg-gradient-to-r from-[#6889e6] via-[#a5bdff] to-[#d6e1ff] bg-clip-text text-transparent">Ronyzs</h2>
            </div>
            <SearchInput />
        </div>
    )
}