import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from "react-bootstrap";
import BackgroundImage from '../components/BackgroundImage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchpage.css'
const SearchPages = () => {
    const { id } = useParams();
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${id}&page=1&include_adult=false`;
            let res = await fetch(url);
            let data = await res.json();
            let finalData = data.results;
            setSearchData(finalData);
            console.log(searchData);
        };
        fetchData();
    }, [id]);

    return (
        <div>

            <div className="card-container">
                {searchData && searchData.map((e) => {
                    return (
                        <div key={e.id} className="search-card">
                            <Card style={{ width: "20vw", backgroundColor: "#141414" }} className="each-card">
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${e.poster_path}`} alt="Show Poster" className="search-poster" />
                                <Card.Body className="search-body">
                                    <Card.Title className="search-title">{e.title}</Card.Title>
                                    <br />
                                    <Card.Subtitle className="search-sub">
                                        Viewers' Rating: {e.vote_average}
                                    </Card.Subtitle>
                                    <br />
                                    <Card.Text>
                                        {e.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchPages
