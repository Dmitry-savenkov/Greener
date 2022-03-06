import { StyleSheet, Text, View, FlatList, Button, Image, Dimensions } from 'react-native';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import HomeScreenData from '../data/HomeScreenData';
import 'react-native-reanimated';
import { MotiView } from 'moti';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
    const flatlistRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        flatlistRef.current?.scrollToIndex({
            index: activeIndex,
            animated: true,
            viewOffset: 10,
            viewPosition: 1
        });
    }, [activeIndex]);

    const ITEM_HEIGHT = width;

    let [fontsLoaded] = useFonts({
        'SFUIDisplay-Regular': require('./../assets/fonts/SFUIDisplay-Regular.ttf'),
        'SFUIDisplay-Medium': require('./../assets/fonts/SFUIDisplay-Medium.ttf'),
        'SFUIDisplay-Bold': require('./../assets/fonts/SFUIDisplay-Bold.ttf')
    });
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
                            colors={['rgba(10, 196, 186, 1)', 'rgba(43, 218, 142, 1)']}
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
                                            backgroundColor:
                                                activeIndex === index ? '#9DA3B4' : 'rgba(157, 163, 180, 0.4)'
                                        }
                                    ]}
                                ></MotiView>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: height * 0.1
    },
    blockCentering: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: 'rgba(50, 54, 67, 1)',
        fontSize: 32,
        fontFamily: 'SFUIDisplay-Bold'
    },
    titleGradientElement: {
        fontSize: 32,
        fontFamily: 'SFUIDisplay-Bold'
    },
    textUnderTitle: {
        color: 'rgba(197, 204, 214, 1)',
        marginTop: 10,
        fontSize: 18
    },
    sliderContainer: {
        marginTop: 35
    },
    slider: {
        position: 'absolute',
        backgroundColor: 'rgba(197, 204, 214, 0.15)',
        left: -width * 0.05,
        width: width * 1.1,
        height: width * 1.1,
        borderRadius: width
    },
    sliderImage: {
        width: width,
        height: height * 0.5,
        resizeMode: 'cover'
    },
    paginationSlider: {
        top: height * 0.43,
        left: width * 0.45,
        position: 'absolute',
        flexDirection: 'row'
    },
    paginationDot: {
        margin: 3,
        width: 5,
        height: 5,
        backgroundColor: '#9DA3B4',
        borderRadius: 6
    }
});

export default HomeScreen;
