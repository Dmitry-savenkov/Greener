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
  const { homeScreenData, browseNameCategories, avatar } = useSelector((state) => ({
    homeScreenData: state?.Browse.homeScreenData,
    browseNameCategories: state?.Browse.browseNameCategories,
    avatar: state?.User.avatar,
  }));

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
            style={{ marginRight: 15, width: '85%' }}
          />
        </View>
        <TouchableOpacity>
          <NotificationsIcon size={30} color={colors.gray3} />
        </TouchableOpacity>
      </View>

      <View>
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
              <MotiView style={{ width: width, overflow: 'hidden' }}>
                <View
                  style={{
                    width: width - width * 0.08 * 2,
                    height: 100,
                    backgroundColor: '#CCF1BE',
                    marginTop: 40,
                    borderRadius: 15,
                  }}
                >
                  <View style={{ marginLeft: 12, marginTop: 13 }}>
                    <View
                      style={{
                        width: 100,
                        height: 23,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        backgroundColor: colors.white,
                        borderRadius: 10,
                      }}
                    >
                      <Image source={require('../assets/twemoji_potted-plant.png')} />
                      <View>
                        <Text style={{ color: '#5A5A5A', marginLeft: 5 }}>Plant tips</Text>
                      </View>
                    </View>
                    <View style={{ marginTop: 10, width: 120 }}>
                      <Text style={{ color: '#5A5A5A', fontWeight: '500', fontSize: 18 }}>
                        Plants make people happy!
                      </Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={require('../assets/unsplash_XXpbdU_31Sg.png')}
                  style={{ position: 'absolute', right: width * 0.08 * 2, bottom: 0 }}
                />
              </MotiView>
            );
          }}
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 18 }}>
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
  },
  listCategory: {
    marginTop: 50,
  },
  categoryNameItem: {
    marginRight: 30,
  },
  categoryNameText: {
    fontFamily: 'SFUIDisplay-Medium',
    fontSize: 18,
  },
  grayLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(225, 227, 232, 1)',
    marginBottom: 40,
  },
  underlineGreen: {
    marginTop: 21,
    width: '100%',
    height: 3,
    backgroundColor: colors.primary,
  },
  categoryBlock: {
    alignItems: 'center',
    width: '45%',
    height: 150,
    margin: 7.5,
    backgroundColor: colors.white,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
  shadowFlatList: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  imageBG: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(43, 218, 142, 0.2)',
    marginBottom: 15,
  },
  categoryBlockTitle: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'SFUIDisplay-Medium',
    marginBottom: 4,
  },
  categoryBlockCount: {
    color: colors.gray2,
    fontFamily: 'SFUIDisplay-Regular',
  },
});

export default HomeScreen;
