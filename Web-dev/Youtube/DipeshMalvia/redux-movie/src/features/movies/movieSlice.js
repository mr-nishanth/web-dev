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

const initialState = {
    movies: {},
    shows: {},
}

const movieSlice = createSlice({
    // name of slice
    name: 'movies',
    initialState,
    reducers: {
        // action
        addMovies: (state, { payload }) => {
            // Internal it's use IMME library for mutability
            state.movies = payload
        }
    }, extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending movies")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched movies");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected movies");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Shows");
            return { ...state, shows: payload }
        },
    }
})


export const { addMovies } = movieSlice.actions;

export const getAllMovies = state => state.movies.movies;
export const getAllShows = state => state.movies.shows;

export default movieSlice.reducer;













