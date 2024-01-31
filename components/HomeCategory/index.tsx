import * as React from 'react';
import { Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../components/Themed';

import styles from './styles';

interface Movie {
  id: string;
  poster: string;
}

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: Movie[];
  };
  navigation: any;
}

const HomeCategory: React.FC<HomeCategoryProps> = ({
  category,
  navigation,
}) => {
  const onMoviePress = (movie: any) => {
    if (movie.id) {
      navigation.navigate('MovieDetailsScreen', { id: movie.id });
    } else {
      console.error('Movie id is undefined or null');
    }
  };

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image style={styles.image} source={{ uri: item.poster }} />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 5}}
      />
    </>
  );
};

export default HomeCategory;
