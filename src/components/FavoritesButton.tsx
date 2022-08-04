// Lib
import React from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import { Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// UI
import { colors } from '../constants/theme';

const LikeButton = () => {
  const liked = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP) }],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: liked.value }],
      opacity: liked.value,
    };
  });

  return (
    <Pressable onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcons name={'heart-outline'} size={28} color={colors.black} />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons name={'heart'} size={28} color={'#FF7871'} />
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;
