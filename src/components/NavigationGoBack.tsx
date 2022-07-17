//Lib
import React from 'react';
import { TouchableOpacity } from 'react-native';

//Components
import AntDesignIcon from './icons/AntDesignIcon';

const NavigationGoBack = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <AntDesignIcon name="arrowleft" size={24} color="#C5CCD6" />
    </TouchableOpacity>
  );
};

export default NavigationGoBack;
