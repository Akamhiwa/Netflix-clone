const API_KEY="b19e07280e40f03edff04ffcaa43e707"
const date=new Date()
console.log(date);
const request={
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&with_original_language=en&with_watch_providers=8&watch_region=US`,
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US&page=1 `,
    fetchUpcomingMovies:`/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${date}&sort_by=popularity.desc&without_genres=10749&watch_region=US&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35&without_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&page=1`,
}
export default request