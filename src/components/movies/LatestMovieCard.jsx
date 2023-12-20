import { useEffect, useState } from "react";
import { IMAGE_URL_ORIGINAL, getLatestMovie } from "../../utils";

/* Swiper */
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";

import { useNavigate } from "react-router-dom";
import 'swiper/modules';

export default function LatestMovieCard() {
    const [movies, setMovies] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        getLatestMovie(true).then(({ data }) => {
            setMovies(data)
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    if (!movies)
        return null

    return (
        <div>
            <Swiper
                className="block h-full lg:h-srceen"
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={
                    {
                        delay: 9000,
                        disableOnInteraction: false
                    }
                }
            >
                {
                    movies.map(movie => {
                        return (
                            <SwiperSlide key={movie.id} className="relative overflow-hidden lg:aspect-video cursor-pointer bg-gradient-to-t from-gray-950 via-transparent h-full w-full" onClick={() => navigate(`/detail/${movie.id}`)}>
                                <img
                                    src={IMAGE_URL_ORIGINAL + movie.backdrop_path}
                                    alt={movie.backdrop_path}
                                    className="h-max -z-10 lg:absolute object-cover blur-lg w-full"
                                    loading="lazy"
                                    onLoad={(e) => {
                                        e.target.classList.remove('blur-lg')
                                    }}
                                />
                                <div className="flex flex-col justify-end lg:justify-center h-full p-5 space-y-3 w-full lg:w-1/2">
                                    <h3 className="font-bold text-xs lg:text-7xl">{movie.title}</h3>
                                    <p className="font-thin line-clamp-1 xl:line-clamp-2 w-1/2">{movie.overview}</p>
                                    <button key={movie.id}  className="py-3 w-32 bg-white font-bold text-black text-lg upppercase" onClick={() => navigate(`/detail/${movie.id}`)}>Watch</button>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}