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
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { AddItemToCard } from '../redux/actions/user';

// Components
import BackIcon from '../components/icons/BackIcon';
import DropDown from '../components/DropDown';
import FavoritesButton from '../components/FavoritesButton';
import GrayLine from '../components/GrayLine';

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

  const dispatch = useDispatch();

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
            style={[styles.backIconWrapper]}
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
                  style={[styles.sliderMiniItemWrapper]}
                  key={item.price?.lowPrice + Math.random()}
                >
                  <Image source={item.image} style={[styles.sliderImagesListItem]} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={[styles.plantPayloadWrapper]}>
          <View style={[styles.plantItemHeaderWrapper]}>
            <View>
              <Text style={[styles.titleText, { color: colors.black }]}>{title}</Text>
              <Text style={[styles.choouseStyleColorTitle]}>Choose your style&color</Text>
            </View>
            <View style={[styles.favoriteButtonWrapper]}>
              <FavoritesButton />
            </View>
          </View>
          <View>
            <Text style={[styles.choiceCategoryTitle]}>Size:</Text>
            <View style={[styles.choiceCategoryList]}>
              {dimensions.map((size: string) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.choiceSizeListItem,
                      {
                        borderColor: activeSize === size ? colors.blackPrimary : colors.grayDefault,
                      },
                    ]}
                    key={size + Math.random}
                    onPress={() => {
                      findCurrentImage(
                        activeImageObject,
                        { ...activeImageObject, size: size },
                        sliderPhotos,
                      );
                    }}
                  >
                    <Text
                      style={[
                        styles.choiceCategoryItemText,
                        {
                          color: activeSize === size ? '#2C2C2C' : colors.grayDefault,
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
          <View style={[styles.colorCategoryContainer]}>
            {planterColors.map((planterColor: any) => {
              return (
                <TouchableOpacity
                  style={[styles.colorsCategoryList]}
                  key={planterColor + Math.random}
                  onPress={() => {
                    findCurrentImage(
                      activeImageObject,
                      { ...activeImageObject, color: planterColor },
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
                      style={[
                        styles.colorCategoryItemWrapper,
                        { backgroundColor: plantColors[planterColor.toLocaleLowerCase()] },
                      ]}
                    ></View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            style={[styles.addToCardButtonWrapper]}
            onPress={() => {
              dispatch(AddItemToCard(item));
            }}
          >
            <Text style={[styles.addToCardButtonWrapperText]}>Add To Card - ${lowPrice}</Text>
          </TouchableOpacity>
          <GrayLine />
          <DropDown information={description} title={'Description'} />
          <GrayLine />
          <DropDown information={careGuide} title={'Care Guide'} />
          <GrayLine />
          <DropDown information={sadPlantSigns} title={'Sad Plant Signs'} />
          <GrayLine />
          <DropDown information={guarantee} title={'30-Day Guarantee'} />
          <GrayLine />
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
  backIconWrapper: {
    marginBottom: 15,
  },
  sliderMiniItemWrapper: {
    marginBottom: 20,
  },
  plantItemHeaderWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
  choouseStyleColorTitle: {
    fontSize: 12,
    color: 'rgba(44, 44, 44, 0.6)',
    marginTop: 4,
  },
  favoriteButtonWrapper: {
    backgroundColor: plantColors.stonewash,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choiceSizeListItem: {
    marginRight: 20,
    borderRadius: 3,
    borderWidth: 0.7,
    width: 90,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorCategoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  addToCardButtonWrapper: {
    marginTop: 10,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.greenCold,
  },
  addToCardButtonWrapperText: {
    color: colors.white,
  },
  colorCategoryItemWrapper: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
});

export default PlantsCategoryItemScreen;
