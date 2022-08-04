// Lib
import React, { useMemo } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

const FeatherIcon = ({ name, size, color }) => {
  return useMemo(
    () => (
      <View>
        <Feather name={name} size={size} color={color} />
      </View>
    ),
    [name, size, color],
  );
};

export default FeatherIcon;
