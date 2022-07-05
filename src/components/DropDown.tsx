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

const Information = ({ information, title }) => {
  switch (title) {
    case 'Description': {
      return <Text>{information}</Text>;
    }
    case 'Care Guide': {
      return (
        <View>
          <Text>{information.title}</Text>
          <View>
            {information.plantCare.map(({ description }) => {
              return <Text>{description}</Text>;
            })}
          </View>
        </View>
      );
    }
    case 'Sad Plant Signs': {
      return (
        <View>
          {information?.map(({ title, description }) => {
            return (
              <View>
                <Text>{title}</Text>
                <Text>{description}</Text>
              </View>
            );
          })}
        </View>
      );
    }
    case '30-Day Guarantee': {
      return <Text>{information}</Text>;
    }
    default:
      return <View></View>;
  }
};

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
          <Information information={information} title={title} />
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
