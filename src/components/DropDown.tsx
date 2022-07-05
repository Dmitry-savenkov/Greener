import React, { useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import Arrowdown from './icons/Arrowdown';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const DropDown = ({ information, title }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpanded(!expanded);
          }}
        >
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Text style={{ color: '#2C2C2C' }}>{title}</Text>
            <View style={{ transform: [{ rotateX: expanded ? '180deg' : '0deg' }] }}>
              <Arrowdown />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={{ color: '#2C2C2C' }}>press F</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default DropDown;
