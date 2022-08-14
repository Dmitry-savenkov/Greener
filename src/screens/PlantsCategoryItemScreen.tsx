// Lib
import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading';

// Components
import NavigationGoBack from '../components/NavigationGoBack';
import DropDown from '../components/DropDown';
import GrayLine from '../components/GrayLine';
import CategoryItemCharacteristic from '../components/home/CategoryItemCharacteristic';

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
            <GrayLine
              width={'100%'}
              height={1}
              backgroundColor={colors.grayDefault}
              marginTop={15}
              marginBottom={15}
            />
            <DropDown information={description} title={'Description'} />
            <GrayLine
              width={'100%'}
              height={1}
              backgroundColor={colors.grayDefault}
              marginTop={15}
              marginBottom={15}
            />
            <DropDown information={careGuide} title={'Care Guide'} />
            <GrayLine
              width={'100%'}
              height={1}
              backgroundColor={colors.grayDefault}
              marginTop={15}
              marginBottom={15}
            />
            <DropDown information={sadPlantSigns} title={'Sad Plant Signs'} />
            <GrayLine
              width={'100%'}
              height={1}
              backgroundColor={colors.grayDefault}
              marginTop={15}
              marginBottom={15}
            />
            <DropDown information={guarantee} title={'30-Day Guarantee'} />
            <GrayLine
              width={'100%'}
              height={1}
              backgroundColor={colors.grayDefault}
              marginTop={15}
              marginBottom={15}
            />
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
