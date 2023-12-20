/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Waypoint } from 'react-waypoint';
import PropTypes from 'prop-types';

export default function Movies({ title, fetchData, isHasRecommendation }) {
    const [movies, setMovies] = useState([]);
    const [pages, setPage] = useState(
        {
            total_pages: null,
            page: 1,
        }
    );

    useEffect(() => {
        // fetch by pages, if null value assigned to 1
        fetchData(pages.page ?? 1).then(({ data, total_pages }) => {
            // set total pages after init fetch data
            if (!pages.total_pages)
                setPage(prev => {
                    return {
                        ...prev,
                        total_pages: total_pages
                    }
                })

            // set movies state data
            setMovies(prev => [...prev, ...data])
            // returning a boolean value into parent
            if (isHasRecommendation != null)
                isHasRecommendation(data.length > 0)
        })
    }, [pages.page])

    // return nothing when theres no movies
    if (movies.length == 0)
        return null;

    return (
        <>
            <h1 className='font-bold text-xs md:text-3xl'>{title}</h1>
            <div className="card__card-list scrollbar__hidden">
                {
                    movies.map(movie => {
                        return (
                            <MovieCard movie={movie} key={movie.id} />
                        );
                    })
                }
                <Waypoint horizontal={true} onEnter={() => {
                    // do the increment of the page if page < total pages
                    if (pages.page < pages.total_pages)
                        setPage(prev => {
                            return {
                                page: prev.page++,
                                ...prev
                            }
                        })
                }} />
            </div>
        </>
    )
}

Movies.propTypes = {
    title: PropTypes.string,
    fetchData: PropTypes.func.isRequired,
    isHasRecommendation: PropTypes.func
}