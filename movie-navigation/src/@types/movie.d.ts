export interface IMovie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export type MovieContextType = {
    movies: IMovie[];
}