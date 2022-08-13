// Libs
import React, { useMemo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { FontAwesome5 } from '@expo/vector-icons';

// Components
import CartListItem from './CartListItem';

const LIST_ITEM_HEIGHT = 120;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const CartList = ({ navigation, plant, onDismiss, activeImageObject, count }) => {
  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
  const marginVertical = useSharedValue(10);
  const opacity = useSharedValue(1);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        itemHeight.value = withTiming(0);
        marginVertical.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(plant);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0);
    return { opacity };
  });

  const rTaskContainerStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      marginVertical: marginVertical.value,
      opacity: opacity.value,
    };
  });

  return useMemo(
    () => (
      <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
        <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
          <FontAwesome5 name={'trash-alt'} size={LIST_ITEM_HEIGHT * 0.3} color={'red'} />
        </Animated.View>
        <PanGestureHandler onGestureEvent={panGesture}>
          <Animated.View style={[styles.task, rStyle]}>
            <CartListItem
              navigation={navigation}
              plant={plant}
              count={count}
              activeImageObject={activeImageObject}
            />
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    ),
    [
      activeImageObject,
      count,
      navigation,
      panGesture,
      plant,
      rIconContainerStyle,
      rStyle,
      rTaskContainerStyle,
    ],
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
  },
  task: {
    padding: 10,
    width: '100%',
    height: LIST_ITEM_HEIGHT,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 16,
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartList;
