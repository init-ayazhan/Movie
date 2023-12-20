import { Navbar} from "../components"
import Footer from "../components/footer/footer"
export default function AboutPage() {
    return (

        <section className="about">
            <section className="app__app-navbar">
                <Navbar />
            </section>
            <div className="about__wrapper flex items-center pt-32">
                <div className="about__image w-1/2">
                    <img className="about__img w-full lg:w-30 mx-auto justify-center"src="/src/assets/images/Movie.png" alt="Movie"/>
                </div>

                <div className="about__info space-y-5 flex flex-col text-white">
                    <h1 className="text-7xl font-bold">What is Cinema?</h1>
                    <div className="text font-medium">
        
                        Cinema is a form of art that tells stories through moving images.
                        <br></br>
                        Cinema began in the late 19th century with the invention of the motion picture camera.
                        <br></br>
                        Films can be documentaries or feature films, entertaining or serious, short or long.
                        <br></br>
                        Cinema is one of the most popular forms of art in the modern world.
                        <br></br>
                        What else do you want to know about cinema?
                    </div>


                </div>
            </div>

            <Footer/>
        </section>

        
    )
}