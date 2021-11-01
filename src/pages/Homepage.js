import React from 'react'
import Url from '../Url'
import '../App.css'
import MovieList from '../components/MovieList/MovieList'
import { useState, useEffect } from 'react'
import Loadding from '../components/Loadding'
import BackgroundImage from '../components/BackgroundImage'


const HomePage = () => {
    const [trending, setTrending] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [dramaMovies, setDramaMovies] = useState([]);
    const [animationMovies, setAnimationMovies] = useState([]);
    const [movieClicked, setMovieClicked] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data1 = await fetch(Url.getTrending);
            const movieList1 = await data1.json();
            setTrending(movieList1);

            const data2 = await fetch(Url.getTV);
            const movieList2 = await data2.json();
            setTvShows(movieList2);

            const data3 = await fetch(Url.getActions);
            const movieList3 = await data3.json();
            setActionMovies(movieList3);

            const data4 = await fetch(Url.getDrama);
            const movieList4 = await data4.json();
            setDramaMovies(movieList4);

            const data5 = await fetch(Url.getAnimation);
            const movieList5 = await data5.json();
            setAnimationMovies(movieList5);
        };
        getData();
    }, []);
    return (
        <div className="HomePage">
            <BackgroundImage />

            <MovieList
                trending={trending}
                tvShows={tvShows}
                actionMovies={actionMovies}
                dramaMovies={dramaMovies}
                animationMovies={animationMovies}
                setMovieClicked={setMovieClicked}
            />
        </div>
    );
};

export default HomePage;
