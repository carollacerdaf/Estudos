import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Movie.style';
import { MovieContext } from '../context/movieContext';
import { IMovie, MovieContextType } from '../@types/movie';

export default function Movie({ route }) {
    const { movie } = route.params;
    
    return (
        <View>
            <Image style={styles.logo} source={{uri: movie.Poster}} />
            <Text style={styles.movieDescription}>{movie.Title} - {movie.Year}</Text>
        </View>
    );
}