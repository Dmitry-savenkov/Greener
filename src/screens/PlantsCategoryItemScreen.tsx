// Lib
import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';

// Components
import NavigationGoBack from '../components/NavigationGoBack';
import DropDown from '../components/DropDown';
import GrayLine from '../components/GrayLine';

// UI
import { width, height, colors } from '../constants/theme';
import { ThemesContext } from '../context/ThemeContext';
import CategoryItemCharacteristic from '../components/CategoryItemCharacteristic';

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

  const { fontsLoaded } = useContext(ThemesContext);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container]}>
        <View style={[styles.header]}>
          <View style={[styles.backIconWrapper]}>
            <NavigationGoBack navigation={navigation} />
          </View>
        </View>
        <View>
          <CategoryItemCharacteristic
            item={item}
            title={title}
            lowPrice={lowPrice}
            dimensions={dimensions}
            planters={planters}
            planterColors={planterColors}
            sliderPhotos={sliderPhotos}
          />
          <View style={[styles.dropDownContainer]}>
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
  backIconWrapper: {
    marginBottom: 15,
  },
  dropDownContainer: {
    paddingHorizontal: width * 0.08,
  },
});

export default PlantsCategoryItemScreen;
