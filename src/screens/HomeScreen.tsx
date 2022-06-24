// Lib
import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import 'react-native-reanimated';
import { MotiView } from 'moti';

// Components
import ModalTermsOfService from '../components/ModalTermsOfService';
import { width, height, colors } from '../constants/theme';

// UI
import { ThemesContext } from '../context/ThemeContext';

// Data
import HomeScreenData from '../data/HomeScreenData';

const HomeScreen = ({ navigation }) => {
  const flatlistRef = useRef(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    flatlistRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
      viewOffset: 10,
      viewPosition: 1,
    });
  }, [activeIndex]);

  const { fontsLoaded } = useContext(ThemesContext);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={[styles.titleText]}>Your home. </Text>
        </View>
        <View>
          <MaskedView maskElement={<Text style={[styles.titleGradientElement]}>Greener.</Text>}>
            <LinearGradient
              colors={[colors.primary, colors.secondary, colors.tertiary]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0.33 }}
              style={{ width: 120, height: 35 }}
            />
          </MaskedView>
        </View>
      </View>
      <View style={styles.blockCentering}>
        <Text style={[styles.textUnderTitle]}>Enjoy the experience</Text>
      </View>
      <View style={[styles.sliderContainer]}>
        <View style={[styles.slider]}></View>
        <FlatList
          ref={flatlistRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={HomeScreenData}
          decelerationRate="fast"
          bounces={false}
          onMomentumScrollEnd={(ev) => {
            const newIndex = Math.round(ev.nativeEvent.contentOffset.x / width);
            setActiveIndex(newIndex);
          }}
          keyExtractor={(item, index) => {
            return item.id + index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <MotiView>
                <Image style={[styles.sliderImage]} source={item.image} />
              </MotiView>
            );
          }}
        />
        <View style={[styles.paginationSlider, styles.blockCentering]}>
          {HomeScreenData.map((_, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setActiveIndex(index);
                }}
              >
                <MotiView
                  style={[
                    styles.paginationDot,
                    {
                      width: activeIndex === index ? 7 : 5,

                      height: activeIndex === index ? 7 : 5,
                      backgroundColor: activeIndex === index ? colors.gray : colors.gray2,
                    },
                  ]}
                ></MotiView>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        <View style={[styles.buttonCenterMode]}>
          <LinearGradient
            start={{ x: 0, y: 15 }}
            end={{ x: 1.33, y: 5 }}
            colors={[colors.primary, colors.secondary, colors.tertiary]}
            style={[styles.buttonLogin, styles.blockCentering]}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <View style={[styles.buttonSignUp, styles.blockCentering]}>
          <Text>Sign up</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleModal}>
        <View style={[styles.blockCentering]}>
          <Text style={[styles.serviceLinkText]}>Terms of service</Text>
        </View>
      </TouchableOpacity>
      {ModalTermsOfService(isModalVisible, toggleModal)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: height * 0.1,
  },
  blockCentering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: colors.black,
    fontSize: 32,
    fontFamily: 'SFUIDisplay-Bold',
  },
  titleGradientElement: {
    fontSize: 32,
    fontFamily: 'SFUIDisplay-Bold',
  },
  textUnderTitle: {
    color: colors.gray2,
    marginTop: 10,
    fontSize: 18,
  },
  sliderContainer: {
    marginTop: 35,
  },
  slider: {
    position: 'absolute',
    backgroundColor: 'rgba(197, 204, 214, 0.15)',
    left: -width * 0.05,
    width: width * 1.1,
    height: width * 1.1,
    borderRadius: width,
  },
  sliderImage: {
    width: width,
    height: height * 0.5,
    resizeMode: 'cover',
  },
  paginationSlider: {
    top: height * 0.43,
    left: width * 0.45,
    position: 'absolute',
    flexDirection: 'row',
  },
  paginationDot: {
    margin: 3,
    width: 5,
    height: 5,
    borderRadius: 6,
  },
  buttonCenterMode: {
    marginTop: 26,
    paddingHorizontal: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin: {
    width: '100%',
    height: 48,
    borderRadius: 9,
  },
  loginButtonText: {
    color: colors.white,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
  },
  buttonSignUp: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 16,
    marginTop: 26,
    marginHorizontal: width * 0.15,
    backgroundColor: colors.white,
    height: 48,
    borderRadius: 9,
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  serviceLinkText: {
    marginTop: 20,
    color: colors.gray,
    fontSize: 13,
    fontFamily: 'SFUIDisplay-Regular',
  },
});

export default HomeScreen;
