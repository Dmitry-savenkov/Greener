// Lib
import React, { useMemo } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native';

const FontAwesome5Icon = ({ name, size, color }) => {
  return useMemo(
    () => (
      <View>
        <FontAwesome5 name={name} size={size} color={color} />
      </View>
    ),
    [name, size, color],
  );
};

export default FontAwesome5Icon;
