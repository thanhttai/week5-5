import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./movie.css";
import 'swiper/swiper-bundle.min.css'
import { Link, useHistory } from 'react-router-dom';

const MovieList = ({ trending, tvShows, actionMovies, dramaMovies, animationMovies, setMovieClicked }) => {
    const history = useHistory()
    const handleMovieClick = (e) => {
        setMovieClicked(e);
        history.push(`/movie/${e.id}`)
    };

    return (
        <div className="MovieList">
            <h1 id={"trending"}>What's trending</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}

            >
                {trending?.results && trending?.results?.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id={"tv"}>TV Shows</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {tvShows?.results && tvShows?.results?.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id={"actions"}>Action</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}

            >
                {actionMovies?.results && actionMovies?.results?.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id={"drama"}>Drama</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}

            >
                {dramaMovies?.results && dramaMovies?.results?.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <h1 id={"animation"}>Animations</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}
                navigation={true}

            >
                {animationMovies?.results && animationMovies?.results?.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img src={`https:image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
        </div>
    );
};
SwiperCore.use([Navigation, Pagination, A11y]);
export default MovieList;
