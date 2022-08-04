// Lib
import React, { useMemo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const IonicsIcon = ({ name, size, color }) => {
  return useMemo(
    () => (
      <View>
        <Ionicons name={name} size={size} color={color} />
      </View>
    ),
    [name, size, color],
  );
};

export default IonicsIcon;
