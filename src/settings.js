const token = "api_key=9021b9fe1130ab05f46bf19e7a9def8f";

const URL_UPCOMINGS = `https://api.themoviedb.org/3/movie/upcoming?${token}&language=en-US&page=1`;
const URL_DETAILS = `https://api.themoviedb.org/3/movie/{movie_id}?${token}&language=en-US`;
const URL_IMAGES = "https://image.tmdb.org/t/p/w500/";

const IMDB_URL = "https://www.imdb.com/title/";

export {
    URL_UPCOMINGS, 
    URL_DETAILS,
    URL_IMAGES,
    IMDB_URL
}