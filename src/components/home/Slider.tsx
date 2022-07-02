// Lib
import React, { useState, useRef, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { MotiView } from 'moti';
import 'react-native-reanimated';

// UI
import { width, colors } from '../../constants/theme';

const DEFAULT_SLIDES = [
  {
    id: 1,
    sliderLabelImage: require('../../assets/twemoji_potted-plant.png'),
    sliderLabelText: 'Plant tips',
    sliderTitleText: 'Plants make people happy!',
    sliderOverflowImage: require('../../assets/slide1.png'),
  },
  {
    id: 2,
    sliderLabelImage: require('../../assets/twemoji_potted-plant.png'),
    sliderLabelText: 'Plant tips',
    sliderTitleText: 'Plants make people happy!',
    sliderOverflowImage: require('../../assets/slide2.png'),
  },
  {
    id: 3,
    sliderLabelImage: require('../../assets/twemoji_potted-plant.png'),
    sliderLabelText: 'Plant tips',
    sliderTitleText: 'Plants make people happy!',
    sliderOverflowImage: require('../../assets/slide3.png'),
  },
];

const Slider = () => {
  const flatlistRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    flatlistRef.current?.scrollToIndex({
      index: activeIndex,
      animated: true,
    });
  }, [activeIndex]);

  return (
    <Fragment>
      <FlatList
        ref={flatlistRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DEFAULT_SLIDES}
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
                    <Image source={item.sliderLabelImage} />
                    <View>
                      <Text style={[styles.sliderLabelText]}>{item.sliderLabelText}</Text>
                    </View>
                  </View>
                  <View style={[styles.sliderTitleWrapper]}>
                    <Text style={[styles.sliderTitleText]}>{item.sliderTitleText}</Text>
                  </View>
                </View>
              </View>
              <Image source={item.sliderOverflowImage} style={[styles.sliderOverflowImage]} />
            </MotiView>
          );
        }}
      />
      <View style={[styles.dotsContainer]}>
        <View style={[styles.dotsWrapper]}>
          {DEFAULT_SLIDES.map((_, index) => {
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
                      backgroundColor: activeIndex === index ? colors.greenCold : colors.greenLight,
                      borderRadius: 10,
                    },
                  ]}
                ></MotiView>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: width,
    overflow: 'hidden',
  },
  sliderBackground: {
    width: width - width * 0.08 * 2,
    height: 100,
    backgroundColor: colors.greenLight,
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
    color: colors.grayDefault,
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
    color: colors.grayDefault,
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
  dotsWrapper: {
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Slider;
