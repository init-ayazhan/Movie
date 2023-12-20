
export default function Footer() {
    return (
        <footer className="footer bg-black">
    
            <div className="flex flex-col justify-center lg:justify-between py-10 lg:flex-row gap-5 px-5">
                <div className="flex flex-col space-y-12 text-white">
                    <div className="font-bold text-4xl">Movie</div>

                    <div className="text-sm w-60">
                        Movie is a form of art that tells stories through moving images.
                    </div>

                    <div>
                        © {new Date().getFullYear()} Movie
                    </div>
                </div>

                <div className="flex flex-col text-white gap-6">
                    <h3 className="text-xl">Menu</h3>
                    <div className="flex flex-col gap-3">
                        <a className="text" to="/">
                         Home
                        </a> 

                        <a className="text" to="/about/">
                         About
                        </a>

                        <a className="text" to="/**">
                         404
                        </a>

                    
                    </div>
                </div>

                <div className="flex flex-col text-white gap-6">
                    <h3 className="text-xl">Contacts</h3>
                    <div className="flex flex-col gap-3">
                        <a className="text-xl" href="tel:+77006764582">
                        +7 (700)676 45 82
                        </a>

                        <a className="text-xl" href="tel:+77770292280">
                        +7 (777) 029 22 80
                        </a>
                        <div className="text text-gray-400">info@movie.kz</div>
                    </div>
                </div>

                <div className="flex flex-col text-white gap-6">
                    <h3 className="text-xl">Other</h3>
                    <div className="flex flex-col mb-auto gap-6">
                        <a to="/*">
                            Privacy Policy
                        </a>
                        <a to="/*">
                        Terms & Services
                        </a>
                    </div>
                
                </div>
            </div>
      
        </footer>
    )
}