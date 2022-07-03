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
import { useSelector } from 'react-redux';

// Components
import BackIcon from '../components/icons/BackIcon';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';

const PlantsCategoryItemScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const title = item?.title;
  const lowPrice = item.price?.lowPrice;
  const hightPrice = item.price?.highPrice;
  const dimensions = item.payload?.size;
  const planters = item.payload?.planter;
  const planterColors = item.payload?.planterColor;
  const description = item.payload?.description;

  const [activeImageObject, setActiveImageObject] = useState(item.payload.sliderPhotos[0]);
  const [mainImage, setMainImage] = useState(activeImageObject.image);

  const findCurrentImage = useCallback((active, updated) => {
    const current = item.payload.sliderPhotos.find((obj) => {
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
          <Image source={mainImage} style={{ width: '100%', height: 490, resizeMode: 'stretch' }} />
        </View>
        <View style={{ position: 'absolute', top: 90, right: 0 }}>
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
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    findCurrentImage(activeImageObject, {
                      ...activeImageObject,
                      size: size.split(' ')[0],
                    });
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
              <TouchableOpacity style={{ marginRight: 10 }}>
                <Text>{planter}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
          {planterColors.map((planterColor: string) => {
            return (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => {
                  findCurrentImage(activeImageObject, {
                    ...activeImageObject,
                    color: planterColor,
                  });
                }}
              >
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
