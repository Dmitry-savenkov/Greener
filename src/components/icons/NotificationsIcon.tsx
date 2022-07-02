// Lib
import React from 'react';
import AntDesign from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const NotificationsIcon = ({ size, color }) => {
  return (
    <View>
      <AntDesign name="notifications-outline" size={size} color={color} />
    </View>
  );
};

export default NotificationsIcon;
