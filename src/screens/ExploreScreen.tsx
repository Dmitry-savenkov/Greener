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
import AntDesignIcon from '../components/icons/AntDesignIcon';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';
import EntypoIcon from '../components/icons/EntypoIcon';

const ExploreScreen = ({ navigation }) => {
  const { name, description, tags, images } = useSelector((state) => ({
    name: state?.BestPlants.name,
    description: state?.BestPlants.description,
    tags: state?.BestPlants.tags,
    images: state?.BestPlants.images,
  }));

  const [indexIndicator, setIndexIndicator] = useState(2);
  const [image, setImage] = useState(require('../assets/images/plants_1.png'));
  const [displayStatus, setDisplayStatus] = useState(true);
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
          <AntDesignIcon name="arrowleft" size={24} color="#C5CCD6" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EntypoIcon name="dots-three-horizontal" size={22} color="#C5CCD6" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.imageStyleHeader]}>
          <Image source={image} style={[styles.headerImage]} />
        </View>
        <View style={[styles.payloadContent]}>
          <View style={[styles.titleCategory]}>
            <Text style={[styles.titleText]}>{name}</Text>
          </View>
          <View style={[styles.listCategory]}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={tags}
              bounces={false}
              keyExtractor={(_, index) => {
                return index + Math.random().toString();
              }}
              renderItem={({ item }) => {
                return (
                  <View style={[styles.categoryNameItem]}>
                    <Text style={[styles.categoryNameText]}>{item.name}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <Text style={[styles.descriptionText]}>{description}</Text>
          </View>
          <View style={[styles.grayInderline]}></View>
          <View style={[styles.galleryBlock]}>
            <Text style={[styles.galleryBlockTitle]}>Gallery</Text>
            <View style={{ flexDirection: 'row' }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={images.slice(0, indexIndicator)}
                bounces={false}
                keyExtractor={(_, index) => {
                  return index + Math.random().toString();
                }}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setImage(item);
                      }}
                    >
                      <View style={[styles.categoryNameImage]}>
                        <Image source={item} style={[styles.imageSlider]} />
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setIndexIndicator(images.length);
                  setDisplayStatus(false);
                }}
                style={{ display: displayStatus ? 'flex' : 'none' }}
              >
                <View style={[styles.grayBlock]}>
                  <Text>+{images.length - 2}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.085,
  },
  headerImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  imageStyleHeader: {
    marginTop: 10,
    marginBottom: 25,
  },
  payloadContent: {
    paddingHorizontal: width * 0.085,
  },
  titleCategory: {
    marginBottom: 15,
  },
  titleText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: 'SFUIDisplay-Medium',
  },
  listCategory: {
    marginBottom: 20,
  },
  categoryNameItem: {
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.gray2,
  },
  categoryNameText: {
    color: colors.gray,
    fontFamily: 'SFUIDisplay-Regular',
    paddingVertical: 6,
    paddingHorizontal: 19,
  },
  descriptionText: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: 'SFUIDisplay-Medium',
  },
  grayInderline: {
    marginTop: 20,
    width: '100%',
    height: 1,
    backgroundColor: colors.gray2,
  },
  galleryBlock: {
    marginTop: 20,
    marginBottom: 20,
  },
  galleryBlockTitle: {
    color: colors.black,
    fontSize: 18,
    fontFamily: 'SFUIDisplay-Medium',
    marginBottom: 10,
  },
  grayBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    backgroundColor: colors.gray2,
    opacity: 0.3,
  },
  imageSlider: {
    width: 115,
    height: 115,
    resizeMode: 'cover',
  },
  categoryNameImage: {
    marginRight: 20,
  },
});

export default ExploreScreen;
