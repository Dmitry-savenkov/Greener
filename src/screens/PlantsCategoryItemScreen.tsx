// Lib
import React, { useState, useContext, useCallback } from 'react';
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
import { LogBox } from 'react-native';
import { useSelector } from 'react-redux';

// Components
import BackIcon from '../components/icons/BackIcon';
import DropDown from '../components/DropDown';
import FavoritesButton from '../components/FavoritesButton';

// UI
import { width, height, colors, plantColors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);

const PlantsCategoryItemScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const title = item?.title;
  const lowPrice = item.price?.lowPrice;
  const hightPrice = item.price?.highPrice;
  const dimensions = item.payload?.size;
  const planters = item.payload?.planter;
  const planterColors = item.payload?.planterColor;
  const description = item.payload?.description;
  const sliderPhotos = item.payload?.sliderPhotos;
  const careGuide = item.payload?.careGuide;
  const sadPlantSigns = item.payload?.sadPlantSigns;
  const guarantee = item.payload?.guarantee?.description;

  const [activeImageObject, setactiveImageObject] = useState(sliderPhotos[0]);
  const [mainImage, setMainImage] = useState(activeImageObject.image);
  const [activeSize, setActiveSize] = useState(activeImageObject.size);
  const [activePlanter, setActivePlanter] = useState(activeImageObject.planter);
  const [activeColor, setActiveColor] = useState(activeImageObject.color);

  const findCurrentImage = useCallback((active, updated, sliderPhotos) => {
    const current = sliderPhotos.find((obj: { size: string; color: string }) => {
      if (obj.size === updated.size && obj.color === updated.color) {
        return obj;
      }
    });
    setActiveSize(updated.size);
    setActiveColor(updated.color);
    current ? setMainImage(current.image) : setMainImage(active.image);
    current ? setactiveImageObject(current) : setactiveImageObject(active);
  }, []);

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginBottom: 15 }}
          >
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Image source={mainImage} style={[styles.mainImage]} />
          </View>
          <View style={[styles.sliderImagesListWrapper]}>
            <FlatList
              nestedScrollEnabled={true}
              style={[styles.sliderImagesList]}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              data={sliderPhotos}
              decelerationRate="fast"
              bounces={false}
              keyExtractor={(item, index) => {
                return item.id + index.toString();
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setMainImage(item.image)}
                  style={{ marginBottom: 20 }}
                  key={item.price?.lowPrice + Math.random()}
                >
                  <Image source={item.image} style={[styles.sliderImagesListItem]} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={[styles.plantPayloadWrapper]}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 15,
            }}
          >
            <View>
              <Text style={[styles.titleText, { color: '#2C2C2C' }]}>{title}</Text>
              <Text style={{ fontSize: 12, color: 'rgba(44, 44, 44, 0.6)', marginTop: 4 }}>
                Choose your style&color
              </Text>
            </View>
            <View
              style={{
                backgroundColor: plantColors.stonewash,
                width: 40,
                height: 40,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FavoritesButton />
            </View>
          </View>
          <View>
            <Text style={[styles.choiceCategoryTitle]}>Size:</Text>
            <View style={[styles.choiceCategoryList]}>
              {dimensions.map((size: string) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginRight: 20,
                      borderRadius: 3,
                      borderWidth: 0.7,
                      borderColor: activeSize === size ? colors.blackPrimary : colors.grayDefault,
                      width: 90,
                      height: 32,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    key={size + Math.random}
                    onPress={() => {
                      findCurrentImage(
                        activeImageObject,
                        {
                          ...activeImageObject,
                          size: size,
                        },
                        sliderPhotos,
                      );
                    }}
                  >
                    <Text
                      style={[
                        styles.choiceCategoryItemText,
                        {
                          color: activeSize === size ? '#2C2C2C' : colors.grayDefault,
                          fontSize: 12,
                          fontWeight: activeSize === size ? '500' : '400',
                        },
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <Text style={[styles.choiceCategoryTitle]}>Planter:</Text>
          <View style={[styles.choiceCategoryList]}>
            {planters.map((planter: string) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.planterCategoryItem,
                    {
                      borderColor:
                        activePlanter === planter ? colors.blackPrimary : colors.grayDefault,
                    },
                  ]}
                  key={planter + Math.random}
                >
                  <Text
                    style={[
                      styles.choiceCategoryItemText,
                      {
                        color: activePlanter === planter ? '#2C2C2C' : colors.grayDefault,
                        fontSize: 12,
                        fontWeight: activePlanter === planter ? '500' : '400',
                      },
                    ]}
                  >
                    {planter}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={[styles.choiceCategoryTitle]}>Color:</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
            {planterColors.map((planterColor: any) => {
              return (
                <TouchableOpacity
                  style={[styles.colorsCategoryList]}
                  key={planterColor + Math.random}
                  onPress={() => {
                    findCurrentImage(
                      activeImageObject,
                      {
                        ...activeImageObject,
                        color: planterColor,
                      },
                      sliderPhotos,
                    );
                  }}
                >
                  <View
                    style={[
                      styles.colorCategoryWrapper,
                      {
                        borderColor: activeColor === planterColor ? '#2C2C2C' : colors.grayDefault,
                      },
                    ]}
                  >
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        backgroundColor: plantColors[planterColor.toLocaleLowerCase()],
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.grayDefault,
              marginTop: 15,
              marginBottom: 15,
            }}
          ></View>
          <DropDown information={description} title={'Description'} />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.grayDefault,
              marginTop: 15,
              marginBottom: 15,
            }}
          ></View>
          <DropDown information={careGuide} title={'Care Guide'} />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.grayDefault,
              marginTop: 15,
              marginBottom: 15,
            }}
          ></View>
          <DropDown information={sadPlantSigns} title={'Sad Plant Signs'} />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.grayDefault,
              marginTop: 15,
              marginBottom: 15,
            }}
          ></View>
          <DropDown information={guarantee} title={'30-Day Guarantee'} />
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: colors.grayDefault,
              marginTop: 15,
              marginBottom: 15,
            }}
          ></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: height * 0.07,
  },
  header: {
    paddingHorizontal: width * 0.08,
  },
  mainImage: {
    width: '100%',
    height: 490,
    resizeMode: 'stretch',
  },
  sliderImagesListWrapper: {
    position: 'absolute',
    top: (490 - 240) / 2,
    right: 12,
  },
  sliderImagesList: {
    height: 240,
  },
  sliderImagesListItem: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.background,
  },
  plantPayloadWrapper: {
    paddingHorizontal: width * 0.08,
  },
  titleWrapper: {
    marginTop: 15,
  },
  titleText: {
    color: colors.grayDefault,
    fontSize: 16,
  },
  choiceCategoryTitle: {
    marginBottom: 7,
    fontSize: 16,
    color: '#2C2C2C',
    marginTop: 10,
  },
  choiceCategoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  choiceCategoryItemText: {
    color: colors.grayDefault,
    fontSize: 12,
    fontWeight: '400',
  },
  planterCategoryItem: {
    width: 91,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 0.7,
    borderColor: colors.grayDefault,
    marginBottom: 10,
  },
  colorsCategoryList: {
    marginRight: 10,
  },
  colorCategoryWrapper: {
    width: 28,
    height: 28,
    borderRadius: 20,
    margin: 4,
    borderWidth: 1.5,
    borderColor: colors.grayDefault,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlantsCategoryItemScreen;
