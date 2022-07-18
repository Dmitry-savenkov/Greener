// Lib
import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';

//Components
import Slider from '../components/home/Slider';
import Categories from '../components/home/Categories';
import BestPlants from '../components/home/BestPlants';
import SearchForm from '../components/home/SearchForm';
import Notification from '../components/home/Notification';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={[styles.container]}>
      <View style={[styles.header]}>
        <SearchForm />
        <Notification />
      </View>
      <Slider />
      <Categories />
      <BestPlants navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: height * 0.085,
  },
  header: {
    paddingHorizontal: width * 0.08,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
