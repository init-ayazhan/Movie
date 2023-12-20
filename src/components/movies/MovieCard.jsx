import PropTypes from 'prop-types';
import { IMAGE_URL_W300 } from '../../utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Link to={`/detail/${movie.id}`} className="card">
            <div className={`rounded-lg w-max ${imageLoaded ? '' : 'bg-gray-600 animate-pulse'}`}>
                <img
                    src={IMAGE_URL_W300 + movie.poster_path}
                    alt={movie.poster_path}
                    loading='lazy'
                    className={`rounded-lg object-cover h-[150px] 2xl:h-[300px] min-w-[calc(150px*3/4)] 2xl:min-w-[calc(300px*3/4)] transition-all duration-300 ${imageLoaded ? 'opacity-1 scale-100' : 'opacity-0 scale-75'}`}
                    onLoad={() => {
                        setImageLoaded(true)
                    }}
                />
            </div>
        </Link>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}