// Lib
import React, { useMemo } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

const MaterialCommunityIcon = ({ name, size, color }) => {
  return useMemo(
    () => (
      <View>
        <MaterialCommunityIcons name={name} size={size} color={color} />
      </View>
    ),
    [name, size, color],
  );
};

export default MaterialCommunityIcon;
