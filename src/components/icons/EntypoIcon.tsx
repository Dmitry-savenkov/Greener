// Lib
import React, { useMemo } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { View } from 'react-native';

const EntypoIcon = ({ name, size, color }) => {
  return useMemo(
    () => (
      <View>
        <Entypo name={name} size={size} color={color} />
      </View>
    ),
    [name, size, color],
  );
};

export default EntypoIcon;
