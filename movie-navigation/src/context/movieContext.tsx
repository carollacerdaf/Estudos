import React, { createContext, useState } from 'react';
import { MovieContextType, IMovie } from '../@types/movie';

const DEFAULT_VALUE: any = {
    movies:
        [{
            Title: "In the Mood for Love", "Year": "2000", imdbID: "tt0118694", Type: "movie",
            Poster: "movie.jpg"
        }]
}

export const MovieContext = createContext<MovieContextType>(DEFAULT_VALUE);

export const MovieContextProvider = () =>{
    const [movies, setMovies] = useState(DEFAULT_VALUE.movies);

    return(
        <MovieContext.Provider value={movies}></MovieContext.Provider>
    )
}