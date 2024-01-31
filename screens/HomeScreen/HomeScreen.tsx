import * as React from 'react';
import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; // Adjust import based on your navigation setup

import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

// Define the type for the navigation prop
type HomeScreenNavigationProp = NavigationProp<StackNavigationProp<{}>>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={categories.items}
          renderItem={({ item }) => (
            <HomeCategory category={item} navigation={navigation} />
          )}
          contentContainerStyle={{ gap: 25 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
