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
  const activeImageObject = sliderPhotos[0];

  const [mainImage, setMainImage] = useState(activeImageObject.image);
  const [activeSize, setActiveSize] = useState(activeImageObject.size);
  const [activeColor, setActiveColor] = useState(activeImageObject.color);
  console.log(activeSize);

  const findCurrentImage = useCallback((active, updated, sliderPhotos) => {
    const current = sliderPhotos.find((obj) => {
      if (obj.size === updated.size && obj.color === updated.color) {
        return obj;
      }
    });
    current ? setMainImage(current.image) : setMainImage(active.image);
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
          >
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Image
              source={mainImage}
              style={{ width: '100%', height: 490, resizeMode: 'stretch' }}
            />
          </View>
          <View style={{ position: 'absolute', top: 90, right: 0 }}>
            <FlatList
              nestedScrollEnabled={true}
              style={{ height: 200 }}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              data={[...sliderPhotos, ...sliderPhotos]}
              decelerationRate="fast"
              bounces={false}
              keyExtractor={(item, index) => {
                return item.id + index.toString();
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setMainImage(item.image)}
                  style={{ marginBottom: 10 }}
                  key={item.price?.lowPrice + Math.random()}
                >
                  <Image source={item.image} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: width * 0.08 }}>
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text>{title}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text>${lowPrice}-</Text>
            <Text>{hightPrice}</Text>
          </View>
          <View>
            <Text>Size</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
              {dimensions.map((size: string) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginRight: 10,
                      paddingHorizontal: 5,
                      paddingVertical: 2,
                      borderRadius: 3,
                      borderWidth: 1,
                      backgroundColor: activeSize === size ? 'white' : 'white',
                    }}
                    key={size + Math.random}
                    onPress={() => {
                      findCurrentImage(
                        activeImageObject,
                        {
                          ...activeImageObject,
                          size: size.split(' ')[0],
                        },
                        sliderPhotos,
                      );
                    }}
                  >
                    <Text>{size}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
            {planters.map((planter: string) => {
              return (
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    paddingHorizontal: 5,
                    paddingVertical: 2,
                    borderRadius: 3,
                    borderWidth: 1,
                  }}
                  key={planter + Math.random}
                >
                  <Text>{planter}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
            {planterColors.map((planterColor: any) => {
              console.log(planterColor.toLocaleLowerCase());
              return (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
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
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 20,
                      backgroundColor: plantColors[planterColor.toLocaleLowerCase()],
                    }}
                  ></View>
                  <Text>{planterColor}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View>
            <Text>{description}</Text>
          </View>
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
});

export default PlantsCategoryItemScreen;
