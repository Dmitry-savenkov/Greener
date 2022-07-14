// Libs
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CartListItem = ({ navigation, plant, activeImageObject, count }) => {
  const { color, image, planter, size } = activeImageObject;

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PlantsCategoryItem', { item: plant });
        }}
      >
        <Image source={image} style={{ width: 80, height: 100, borderRadius: 8 }} />
      </TouchableOpacity>
      <View>
        <Text>{plant.title}</Text>
        <Text>{count}</Text>
        <Text>color: {color}</Text>
        <Text>planter type: {planter}</Text>
        <Text>planter size: {size}</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 16,
  },
});

export default CartListItem;
