// Lib
import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useSelector } from 'react-redux';

// Components
import BackIcon from '../components/icons/BackIcon';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const PlantsCategoryItemScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[styles.container]}>
      <View style={[styles.header]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackIcon />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Image
            source={item.previewImage}
            style={{ width: '100%', height: 490, resizeMode: 'stretch' }}
          />
        </View>
        <View style={{ position: 'absolute' }}>
          <FlatList
            style={{ height: 200 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={item.payload.sliderPhotos}
            decelerationRate="fast"
            bounces={false}
            keyExtractor={(item, index) => {
              return item.id + index.toString();
            }}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Image source={item.image} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: height * 0.07,
  },
  header: {
    paddingHorizontal: width * 0.08,
  },
});

export default PlantsCategoryItemScreen;
