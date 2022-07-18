// Libs
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

// Actions
import { DecreasingNumberItemsCart, IncreasingNumberItemsCart } from '../../redux/actions/cart';

const CartListItem = ({ navigation, plant, activeImageObject, count }) => {
  const { color, image, planter, size } = activeImageObject;
  const dispatch = useDispatch();

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
        <TouchableOpacity
          onPress={() => {
            dispatch(
              IncreasingNumberItemsCart({
                id: plant.id,
              }),
            );
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={count === 1}
          onPress={() => {
            dispatch(
              DecreasingNumberItemsCart({
                id: plant.id,
              }),
            );
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
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
