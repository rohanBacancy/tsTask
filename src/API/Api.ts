import { getReq } from './Network'

const TrendingAllURL = process.env.REACT_APP_TREANDING
const PopularMoviesURL = process.env.REACT_APP_MOVIE_URI
const PopularTvShowsURL = process.env.REACT_APP_TVSHOW_URI
const SearchMoviesURL = process.env.REACT_APP_SEARCH_MOVIE
const SearchTvShowsURL = process.env.REACT_APP_SEARCH_TV
const SearchAnythingURL = process.env.REACT_APP_SEARCH_ANYTHING

export const getTrending = (page: number) => getReq(TrendingAllURL+`&page=${page}`)
export const getPopularMovies = (page: number) => getReq(PopularMoviesURL+`&page=${page}`)
export const getPopularTvShows = (page: number) => getReq(PopularTvShowsURL+`&page=${page}`)
export const searchMovies = (query: string,page: number) => getReq(SearchMoviesURL+query+`&page=${page}`)
export const searchTvShows = (query: string,page: number) => getReq(SearchTvShowsURL+query+`&page=${page}`)
export const searchAnything = (query: string,page: number) => getReq(SearchAnythingURL+query+`&page=${page}`)
