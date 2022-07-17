// Lib
import React, { useMemo } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';

const AntDesignIcon = ({ name, size, color }) => {
  return useMemo(
    () => (
      <View>
        <AntDesign name={name} size={size} color={color} />
      </View>
    ),
    [name, size, color],
  );
};

export default AntDesignIcon;
