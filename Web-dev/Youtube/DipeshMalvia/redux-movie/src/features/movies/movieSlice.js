import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
        const movieText = "Harry"
        const res = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        return res.data
    }
)

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
        const seriesText = "Friends"
        const res = await movieApi.get(`?apikey=${APIKey}&s=${seriesText}&type=series`)
        return res.data
    }
)

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetails",
    async (id) => {
        const seriesText = "Friends"
        const res = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
        return res.data
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}

const movieSlice = createSlice({
    // name of slice
    name: 'movies',
    initialState,
    reducers: {
        // action
        // addMovies: (state, { payload }) => {
        //     // Internal it's use IMME library for mutability
        //     state.movies = payload
        // },
        removeSelectedMovieOrShowDetails: (state) => {
            state.selectedMovieOrShow = {}
        },
    }, extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Movies Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Movies Fetched");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Movies Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Shows Fetched");
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
            console.log("Movie or Show Details Fetched");
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})


export const { addMovies, removeSelectedMovieOrShowDetails } = movieSlice.actions;

export const getAllMovies = state => state.movies.movies;
export const getAllShows = state => state.movies.shows;
export const getSelectedMovieOrShowDetails = state => state.movies.selectedMovieOrShow;

export default movieSlice.reducer;













