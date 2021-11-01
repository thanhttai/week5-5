import React, { useEffect, useState } from "react";
import Url from "../Url.js"
import '../App.css'
import { Button, Modal } from 'react-bootstrap'
const truncateString = (string, limit) => {
    if (string?.length > limit) {
        return string.substring(0, limit) + "..."; //limit characters of movie overview
    } else {
        return string;
    }
};

const BackgroundImage = () => {
    const [randomMovie, setRandomMovie] = useState([]);
    const [show, setShow] = useState(false);
    const [movieTrailer, setMovieTrailer] = useState("");

    const API_KEY = process.env.REACT_APP_API_KEY;

    const handleClose = (e) => {

        setShow(false)
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(Url.getTrending);
            const result = await data.json();


            setRandomMovie(result.results[Math.floor(Math.random() * result.results.length - 1)]);

        }
        getData();
    }, []); //no dependencies
    const getDate = () => {
        let date = randomMovie.first_air_date
        let today = Date.now()
        console.log(today)
    }
    getDate()

    const fetchVideo = async () => {
        if (randomMovie?.id !== undefined) {
            const url = `https://api.themoviedb.org/3/movie/${randomMovie?.id}/videos?api_key=${API_KEY}`;
            const resp = await fetch(url);
            const json = await resp.json()

            if (json !== [] && json.results) {
                setMovieTrailer(json?.results[0]?.key)

            }
        }
    }
    fetchVideo()
    return (
        <header
            className="mast-head"
            style={{
                objectFit: "contain",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                height: "80vh"
            }}
        >
            <div className="mast-body">
                <h1 className="mast-title">
                    {randomMovie?.title || randomMovie?.original_title || randomMovie?.name}
                </h1>
                <div className="mast-overview">
                    {truncateString(randomMovie?.overview, 150)}
                </div>
                <div className="mass-button">
                    <Button className="btn play-btn white" onClick={handleShow}>Phát</Button>
                    <button className="btn info-btn gray">Thông tin khác</button>
                </div>
            </div>
            <>
                <Modal show={show} onHide={handleClose} animation={false} className="modal-container">
                    <Modal.Header closeButton className="modal-content">
                        {
                            movieTrailer ? <iframe
                                src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1`}
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

                    </Modal.Header>
                    <Modal.Body className="heading-title">{randomMovie?.title && randomMovie?.original_title ? randomMovie?.title : "I'm don't have a money buy api"}</Modal.Body>
                    <Modal.Body>Date: {randomMovie?.release_date ? randomMovie?.release_date : "I'm don't have a money buy api"}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Donate
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </header>
    );
};

export default BackgroundImage;
