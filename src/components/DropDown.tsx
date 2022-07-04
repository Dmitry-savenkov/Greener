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

const DropDown = () => {
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
          <View style={{ transform: [{ rotateX: expanded ? '180deg' : '0deg' }] }}>
            <Arrowdown />
          </View>
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={{ alignItems: 'flex-start' }}>
          <Text>press F</Text>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
});

export default DropDown;
