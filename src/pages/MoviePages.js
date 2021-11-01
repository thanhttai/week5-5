import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import Header from "../../Components/Header/Header";
import { Container, Button, Image } from "react-bootstrap";
import '../movie.css'
import MovieVideo from "./MovieVideo"


const API_KEY = process.env.REACT_APP_API_KEY;

const MoviePages = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    // const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const resp = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            );
            const json = await resp.json();

            setMovieDetail(json);


        };
        fetchMovieDetail();
    }, []);


    console.log(movieDetail)

    return (
        <div className="App1" >
            <div className="app-container" >
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path} />
                        </div>
                        <div className="col-6 right">
                            <h4>{movieDetail.title}</h4>
                            <p>
                                Genres:{" "}
                                {movieDetail.genres?.map((g) => {
                                    return (
                                        <Button variant={"success"} className="ml-2 button__btn" key={g.key}
                                            style={{ margin: '10px 5px' }}

                                        >
                                            {g.name}
                                        </Button>
                                    );
                                })}
                            </p>
                            <p>
                                {movieDetail.production_companies?.map((p) => {
                                    return (
                                        <Image
                                            key={p.id}
                                            className="mx-3"
                                            style={{ width: "90px", height: "auto" }}
                                            src={`https://image.tmdb.org/t/p/w500/${p.logo_path || "p3ZZzdpYlf6PEz5HR9t5SJQT5dO.png"}`}
                                        />
                                    );
                                })}
                            </p>
                            <strong>
                                <p>{movieDetail.overview}</p>
                            </strong>
                            <p>Runtime: {movieDetail.runtime} minutes</p>
                            <Button href={movieDetail.homepage}>To Movie Page</Button>
                            <hr className="solid"></hr>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <MovieVideo movieDetail={movieDetail} />

            </div>
        </div>
    );
};

export default MoviePages


// import { Container, Jumbotron, Button, Image } from "react-bootstrap";

// const API_KEY = process.env.REACT_APP_API_KEY;

// const MovieDetailPage = () => {
//   const { id } = useParams();
//   const [movieDetail, setMovieDetail] = useState({});
//   const [movieTrailer, setMovieTrailer] = useState("");
//   console.log({ movieTrailer });
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchMovieDetail = async () => {
//       const resp = await fetch(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
//       );
//       const json = await resp.json();
//       console.log({ haha: json });
//       setMovieDetail(json);
//     };
//     fetchMovieDetail();
//   }, [id]);

//   const fetchYoutubeId = async () => {
//     const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
//     const resp = await fetch(url);
//     const json = await resp.json();
//     console.log({ hihi: json });
//     if (json.results.length > 0) {
//       setMovieTrailer(json.results[0]);
//       setModalOpen(!modalOpen);
//     }
//   };

//   return (
//     <div className="movie-page">
//       <Header />
//       <Container className="movie-page">
//         <Jumbotron className="bg-dark">
//           <Image
//             height={"500px"}
//             src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path}
//           />
//           <ModalBox
//             modalOpen={modalOpen}
//             setModalOpen={setModalOpen}
//             movieTrailer={movieTrailer}
//           />

//           <Button
//             variant="danger"
//             style={{ margin: "20px 0 20px 0" }}
//             onClick={() => fetchYoutubeId(movieDetail.id)}
//           >
//             Play Trailer
//           </Button>
//           <h4>{movieDetail.tagline}</h4>
//           <hr className="solid"></hr>
//           <p>
//             Genres:{" "}
//             {movieDetail.genres?.map((g) => {
//               return (
//                 <Button variant={"success"} className="ml-2" key={g.key}>
//                   {g.name}
//                 </Button>
//               );
//             })}
//           </p>
//           <p>
//             {movieDetail.production_companies?.map((p) => {
//               return (
//                 <Image
//                   key={p.id}
//                   className="mx-3"
//                   style={{ width: "90px", height: "auto" }}
//                   src={`https://image.tmdb.org/t/p/w500/${p.logo_path}`}
//                 />
//               );
//             })}
//           </p>

//           <strong>
//             <p>{movieDetail.overview}</p>
//           </strong>
//           <p>Runtime: {movieDetail.runtime} minutes</p>
//           <Button href={movieDetail.homepage}>To Movie Page</Button>
//           <hr className="solid"></hr>
//         </Jumbotron>
//       </Container>
//     </div>
//   );
// };

// export default MovieDetailPage;```