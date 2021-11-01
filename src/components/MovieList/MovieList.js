import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./movie.css";
import 'swiper/swiper-bundle.min.css'
import { Link, useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'


const MovieList = ({ trending, tvShows, actionMovies, dramaMovies, animationMovies, setMovieClicked }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [show, setShow] = useState(false);
    const [video, setVideo] = useState([])
    const [modalVideoShow, setModalVideoShow] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setVideo(item)
        setShow(true)
    };

    const [modal, setModal] = useState([])
    const history = useHistory()
    const handleMovieClick = (e) => {
        setMovieClicked(e);
        history.push(`/movie/${e.id}`)
    };
    useEffect(() => {
        const getData = async () => {
            const modalVideo = await fetch(`https://api.themoviedb.org/3/movie/${video.id}/videos?api_key=${API_KEY}`)
            const modalVideoRes = await modalVideo.json()
            setModalVideoShow(modalVideoRes)
        }
        getData()
    }, [video])

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
                        <SwiperSlide key={item.id}>
                            <img onClick={() => { handleMovieClick(item); }} src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                            <Button onClick={() => handleShow(item)} className="btn play-btn white">play</Button>

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

            >
                {tvShows?.results && tvShows?.results?.map((item) => {
                    return (
                        <SwiperSlide onClick={() => { handleMovieClick(item); }} key={item.id}>
                            <img onClick={() => { handleMovieClick(item); }} src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                            <Button onClick={() => handleShow(item)} className="btn play-btn white">play</Button>
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
                            <img onClick={() => { handleMovieClick(item); }} src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                            <Button onClick={() => handleShow(item)} className="btn play-btn white">play</Button>
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
                            <img onClick={() => { handleMovieClick(item); }} src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                            <Button onClick={() => handleShow(item)} className="btn play-btn white">play</Button>
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
                            <img onClick={() => { handleMovieClick(item); }} src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} alt="Show Poster" className="show-poster"></img>
                            <Button onClick={() => handleShow(item)} className="btn play-btn white">play</Button>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <br />
            <div>
                <Modal show={show} onHide={handleClose} animation={false} className="modal-container">
                    <Modal.Header closeButton className="modal-content">
                        {
                            modalVideoShow?.results ? <iframe
                                src={`https://www.youtube.com/embed/${modalVideoShow?.results[0]?.key}?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                className="video__btn-lm"
                            /> : <iframe
                                src={`https://www.youtube.com/embed/Rb_tqxQKSPM?autoplay=1`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                className="video__btn-lm"
                            />
                        }

                    </Modal.Header >
                    <Modal.Body className="heading-title">{modalVideoShow?.results?.title && modalVideoShow?.results?.original_title ? modalVideoShow?.results?.title : "I'm don't have a money buy api"}</Modal.Body>
                    <Modal.Body>Date: {modalVideoShow?.results?.release_date ? modalVideoShow?.results?.release_date : "I'm don't have a money buy api"}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Donate
                        </Button>
                    </Modal.Footer>
                </Modal >
            </div >

        </div>
    );
};
SwiperCore.use([Navigation, Pagination, A11y]);
export default MovieList;
