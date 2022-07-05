//Lib
import React from 'react';
import { View } from 'react-native';

//UI
import { colors } from '../constants/theme';

const GrayLine = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: colors.grayDefault,
        marginTop: 15,
        marginBottom: 15,
      }}
    ></View>
  );
};

export default GrayLine;
