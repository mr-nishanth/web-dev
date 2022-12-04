import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const movieText = "Harry"
    const res = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
    return res.data
}
)

const initialState = {
    movies: {}
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
    }
})


export const { addMovies } = movieSlice.actions;

export const getAllMovies = state => state.movies.movies

export default movieSlice.reducer;













