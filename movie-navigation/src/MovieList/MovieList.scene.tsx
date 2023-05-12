import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import styles from '../MovieList/MovieList.style';

type Props = {
    navigation: any;
}

type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

type AppState = {
    movies: Movie[];
}

export default class MovieList extends React.Component<Props> {
    state: AppState = {
        movies: []
    }

    getMovies = () => {
        return fetch('https://www.omdbapi.com/?apikey=fb499913&s=Love&page=2')
            .then(response => response.json())
            .then(json => {
                this.setState({ movies: json.Search });
            })
            .catch(error => {
                console.log(error);
            })
    };

    componentDidMount(): void {
        this.getMovies();
    }

    render() {
        const { movies } = this.state;
        return (
            <View>
                <FlatList style={styles.list}
                    data={movies}
                    keyExtractor={({ imdbID }) => imdbID}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemList} onPress={() => {
                            this.props.navigation.navigate('Movie', { movie: item })
                        }}>
                            <Text>{item.Title} - {item.Year}</Text>
                            <View
                                style={styles.line}
                            />
                        </TouchableOpacity>
                    )} />
            </View>
        );
    }
}