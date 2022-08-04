// Lib
import React from 'react';
import { View } from 'react-native';

// Components
import IonicsIcon from '../icons/IonicsIcon';

const NotificationsIcon = ({ name, size, color }) => {
  return (
    <View>
      <IonicsIcon name={name} size={size} color={color} />
    </View>
  );
};

export default NotificationsIcon;
