import { Navbar, Movies, LatestMovieCard } from "../components"
import { getNowPlaying, getPopular, getTopTated, getUpcoming } from "../utils"
import { useSearchParams } from "react-router-dom";
import SearchPage from "./SearchPage";
import Footer from "../components/footer/footer";

export default function MoviesPage() {
    const [useQuery] = useSearchParams()

    const fetchNowPlaying = (page) => {
        return getNowPlaying(page ?? 1)
    }

    const fetchPopular = (page) => {
        return getPopular(page ?? 1)
    }

    const fetchTopRated = (page) => {
        return getTopTated(page ?? 1)
    }

    const fetchUpcoming = (page) => {
        return getUpcoming(page ?? 1)
    }

    const Landing = () => {
        return (
            <section className="app__app-content ">
                <LatestMovieCard />
                <div className="px-5 space-y-5 pt-5">
                    <Movies fetchData={fetchNowPlaying} title="Now Playing" />
                    <Movies fetchData={fetchTopRated} title="Top Rated" />
                    <Movies fetchData={fetchPopular} title="Popular" />
                    <Movies fetchData={fetchUpcoming} title="Upcoming" />
                </div>
            </section>
        )
    }

    return (
        <div className="app">
            <section className="app__app-navbar">
                <Navbar />
            </section>
            {
                // if there is query return search page
                useQuery.get('query') ? <SearchPage /> : <Landing />
            }
            <Footer/>
        </div>
    )
}

