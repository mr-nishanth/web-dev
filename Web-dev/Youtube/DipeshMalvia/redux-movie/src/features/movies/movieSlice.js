import { createSlice } from "@reduxjs/toolkit";

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
    }

})


export const { addMovies } = movieSlice.actions;

export const getAllMovies = state => state.movies.movies

export default movieSlice.reducer;