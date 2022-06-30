// Lib
import React, { useState, useContext, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useSelector } from 'react-redux';
import { MotiView } from 'moti';
import 'react-native-reanimated';

//Components
import SearchIcon from '../components/icons/SearchIcon';
import NotificationsIcon from '../components/icons//NotificationsIcon';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const flatlistRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [inputValue, setInputValue] = useState('');
  const { fontsLoaded } = useContext(ThemesContext);

  useEffect(() => {
    flatlistRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
    });
  }, [activeIndex]);

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
          <NotificationsIcon size={30} color={colors.gray3} />
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatlistRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4]}
        decelerationRate="fast"
        bounces={false}
        onMomentumScrollEnd={(ev) => {
          setActiveIndex(Math.round(ev.nativeEvent.contentOffset.x / width));
        }}
        keyExtractor={(item, index) => {
          return item.id + index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <MotiView style={[styles.sliderContainer]}>
              <View style={styles.sliderBackground}>
                <View style={[styles.sliderInfoWrapper]}>
                  <View style={[styles.sliderLabel]}>
                    <Image source={require('../assets/twemoji_potted-plant.png')} />
                    <View>
                      <Text style={[styles.sliderLabelText]}>Plant tips</Text>
                    </View>
                  </View>
                  <View style={[styles.sliderTitleWrapper]}>
                    <Text style={[styles.sliderTitleText]}>Plants make people happy!</Text>
                  </View>
                </View>
              </View>
              <Image
                source={require('../assets/unsplash_XXpbdU_31Sg.png')}
                style={[styles.sliderOverflowImage]}
              />
            </MotiView>
          );
        }}
      />
      <View style={[styles.dotsContainer]}>
        <View
          style={{
            width: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {[1, 2, 3, 4].map((_, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setActiveIndex(index);
                }}
              >
                <MotiView
                  style={[
                    {
                      width: activeIndex === index ? 7 : 5,
                      height: activeIndex === index ? 7 : 5,
                      backgroundColor: activeIndex === index ? '#60BF96' : '#CCF1BE',
                      borderRadius: 10,
                    },
                  ]}
                ></MotiView>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
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
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  searchFormInput: {
    marginRight: 15,
    width: '85%',
  },
  sliderContainer: {
    width: width,
    overflow: 'hidden',
  },
  sliderBackground: {
    width: width - width * 0.08 * 2,
    height: 100,
    backgroundColor: '#CCF1BE',
    marginTop: 40,
    borderRadius: 15,
  },
  sliderLabel: {
    width: 100,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  sliderLabelText: {
    color: '#5A5A5A',
    marginLeft: 5,
  },
  sliderInfoWrapper: {
    marginLeft: 12,
    marginTop: 13,
  },
  sliderTitleWrapper: {
    marginTop: 10,
    width: 120,
  },
  sliderTitleText: {
    color: '#5A5A5A',
    fontWeight: '500',
    fontSize: 18,
  },
  sliderOverflowImage: {
    position: 'absolute',
    right: width * 0.08 * 2,
    bottom: 0,
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  // categoryBlock: {
  //   alignItems: 'center',
  //   width: '45%',
  //   height: 150,
  //   margin: 7.5,
  //   backgroundColor: colors.white,
  // shadowColor: '#171717',
  // shadowOffset: { width: 0, height: 0 },
  // shadowOpacity: 0.02,
  // shadowRadius: 10,
  // },
});

export default HomeScreen;
