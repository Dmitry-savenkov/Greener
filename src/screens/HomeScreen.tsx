// Lib
import React, { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import AppLoading from 'expo-app-loading';

//Components
import Slider from '../components/home/Slider';
import SearchIcon from '../components/icons/SearchIcon';
import NotificationsIcon from '../components/icons/NotificationsIcon';
import Categories from '../components/home/Categories';
import BestPlants from '../components/home/BestPlants';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={[styles.container]}>
      <View style={[styles.header]}>
        <View style={[styles.searchForm]}>
          <TouchableOpacity>
            <SearchIcon />
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            style={[styles.searchFormInput]}
          />
        </View>
        <TouchableOpacity>
          <NotificationsIcon size={30} color={colors.grayDefault} />
        </TouchableOpacity>
      </View>
      <Slider />
      <Categories />
      <BestPlants />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: width * 0.08,
    paddingTop: height * 0.085,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchForm: {
    flexDirection: 'row',
    width: '85%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    shadowColor: colors.blackPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  searchFormInput: {
    marginRight: 15,
    width: '85%',
  },
});

export default HomeScreen;
