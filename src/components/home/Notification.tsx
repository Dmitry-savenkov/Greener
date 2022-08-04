// Lib
import React from 'react';
import { TouchableOpacity } from 'react-native';

//Components
import NotificationsIcon from './NotificationsIcon';

// UI
import { colors } from '../../constants/theme';

const Notification = () => {
  return (
    <TouchableOpacity>
      <NotificationsIcon name={'notifications-outline'} size={30} color={colors.grayDefault} />
    </TouchableOpacity>
  );
};

export default Notification;
