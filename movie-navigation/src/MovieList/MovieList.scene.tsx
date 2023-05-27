import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import styles from '../MovieList/MovieList.style';
import { MovieContextProvider } from '../context/movieContext';
import { MovieContextType } from '../@types/movie';

type Props = {
    navigation: any;
}

export default class MovieList extends React.Component<Props> {
    render() {
        const {movies} = React.useContext(MovieContextProvider);
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