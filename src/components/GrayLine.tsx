//Lib
import React from 'react';
import { View } from 'react-native';

const GrayLine = ({ width, height, backgroundColor, marginTop = 0, marginBottom = 0 }) => {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor,
        marginTop,
        marginBottom,
      }}
    ></View>
  );
};

export default GrayLine;
