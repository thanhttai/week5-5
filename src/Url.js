const apiKey = process.env.REACT_APP_API_KEY;

let baseUrl = "https://api.themoviedb.org/3";

let urlRequest = {
    getTrending: `${baseUrl}/trending/all/week?api_key=${apiKey}&language=en-US&page=1`,
    getTV: `${baseUrl}/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`,
    getActions: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    getDrama: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18`,
    getAnimation: `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`
};

export default urlRequest;
