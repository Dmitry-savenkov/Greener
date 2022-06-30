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
      <View style={[styles.blockTitleWrapper]}>
        <Text style={[styles.blockTitle]}>Categories</Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        decelerationRate="fast"
        bounces={false}
        keyExtractor={(item, index) => {
          return item.id + index.toString();
        }}
        renderItem={() => (
          <TouchableOpacity>
            <View style={[styles.categoriesItem]}>
              <View style={[styles.categoriesImageWrapper]}>
                <Image source={require('../assets/twemoji_potted-plant.png')} />
              </View>
              <Text style={[styles.categoriesTitle]}>Plants</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={[styles.blockTitleWrapper]}>
        <Text style={[styles.blockTitle]}>Best Plants</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3]}
          decelerationRate="fast"
          bounces={false}
          keyExtractor={(item, index) => {
            return item.id + index.toString();
          }}
          renderItem={() => (
            <TouchableOpacity>
              <View style={[styles.bestPlantsItem]}>
                <View>
                  <View style={[styles.bestPlantsLabel]}>
                    <Text style={[styles.bestPlantsLabelText]}>Best Seller</Text>
                  </View>
                  <Image
                    source={require('../assets/photoPlant.png')}
                    style={[styles.bestPlantsImage]}
                  />
                </View>
                <View>
                  <Text style={[styles.bestPlantsTitle]}>Monstera Delisiosa</Text>
                  <Text style={[styles.bestPlantsPrice]}>40-90$</Text>
                  <View style={[styles.bestPlantsLinkWrapper]}>
                    <Text style={[styles.bestPlantsLinkText]}>Show More</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
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
  blockTitleWrapper: {
    marginTop: 24,
  },
  blockTitle: {
    color: '#5A5A5A',
    fontSize: 24,
    fontWeight: '600',
  },
  categoriesItem: {
    marginTop: 14,
    width: 80,
    height: 78,
    backgroundColor: colors.white,
    marginRight: 18,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesImageWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#CCF1BE',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#5A5A5A',
    marginTop: 5,
  },
  bestPlantsItem: {
    marginTop: 10,
    marginRight: 23,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 150,
    height: 230,
  },
  bestPlantsLabel: {
    position: 'absolute',
    left: 0,
    top: 20,
    padding: 4,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    zIndex: 10,
    backgroundColor: 'white',
  },
  bestPlantsLabelText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#5A5A5A',
  },
  bestPlantsImage: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 150,
    height: 155,
    resizeMode: 'cover',
  },
  bestPlantsTitle: {
    marginTop: 8,
    marginLeft: 12,
    fontSize: 12,
    fontWeight: '400',
    color: '#5A5A5A',
  },
  bestPlantsPrice: {
    marginTop: 5,
    marginLeft: 12,
    fontSize: 12,
    fontWeight: '400',
    color: '#5A5A5A',
  },
  bestPlantsLinkWrapper: {
    alignItems: 'flex-end',
    marginRight: 8,
  },
  bestPlantsLinkText: {
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '500',
    color: '#5A5A5A',
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
