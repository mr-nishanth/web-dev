import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API}` }),
  endpoints: (builder) => ({
    getMovies: builder.mutation({
      query: ({ query }) => {
        return {
          //   url: `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false`,
          url: `/search/movie?api_key=${process.env.REACT_APP_API_KEY}language=en-US&page=1&include_adult=false&query=${query}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetMoviesMutation } = movieApi;
