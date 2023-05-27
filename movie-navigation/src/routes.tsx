import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieList from './MovieList/MovieList.scene';
import Movie from './Movie/Movie.scene';
import { MovieContextProvider } from './context/movieContext';

const Stack = createNativeStackNavigator();

export default function Root() {
    return (
        <NavigationContainer>
            {/* @ts-expect-error Server Component */}
            <MovieContextProvider>
            <Stack.Navigator>
                <Stack.Screen name="Movie List">
                    {props => <MovieList {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Movie' component={Movie} initialParams={{}} />
            </Stack.Navigator>
            </MovieContextProvider>
        </NavigationContainer>
    );
}