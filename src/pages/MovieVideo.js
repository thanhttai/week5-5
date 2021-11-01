import React from 'react'
import '../movie.css'
import { useState, useEffect } from 'react';
const MovieVideo = ({ movieDetail }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieTrailer, setMovieTrailer] = useState("");

    useEffect(() => {
        const fetchYoutubeId = async () => {
            const id = movieDetail.id
            if (movieTrailer !== undefined) {
                const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

                const resp = await fetch(url);
                const json = await resp.json()
                setMovieTrailer(json)


            };
        }
        fetchYoutubeId()
    }, [])

    return (
        <div style={{ width: '100%' }}>
            {
                movieTrailer?.results !== undefined && movieTrailer?.results[0]?.key !== undefined ? <iframe
                    src={`https://www.youtube.com/embed/${movieTrailer?.results[0]?.key}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="video__btn"
                /> : <iframe
                    src={`https://www.youtube.com/embed/Rb_tqxQKSPM?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="video__btn-lm"
                />
            }
        </div>
    )
}

export default MovieVideo
