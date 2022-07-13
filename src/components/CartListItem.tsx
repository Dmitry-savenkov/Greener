// Libs
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CartListItem = ({ plant, activeImageObject }) => {
  const { color, image, planter, size } = activeImageObject;

  return (
    <Fragment>
      <Image source={image} style={{ width: 80, height: 100, borderRadius: 8 }} />
      <View>
        <Text>{plant.title}</Text>
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
