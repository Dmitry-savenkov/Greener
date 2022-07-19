// Libs
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

// Actions
import { DecreasingNumberItemsCart, IncreasingNumberItemsCart } from '../../redux/actions/cart';
import EntypoIcon from '../icons/EntypoIcon';

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
      <View style={{ marginLeft: 15, marginTop: 6 }}>
        <Text style={{ fontSize: 16, color: '#2C2C2C', fontWeight: '400' }}>{plant.title}</Text>
        <View style={{ flexDirection: 'row', marginTop: 6 }}>
          <Text style={{ fontSize: 14, color: '#2C2C2C', fontWeight: '400' }}>{size} / </Text>
          <Text style={{ fontSize: 14, color: '#2C2C2C', fontWeight: '400' }}>{color} / </Text>
          <Text style={{ fontSize: 14, color: '#2C2C2C', fontWeight: '400' }}>{planter} </Text>
        </View>
        <View style={{ marginTop: 6 }}>
          <Text style={{ fontSize: 14, color: '#2C2C2C', fontWeight: '400' }}>55$</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 80,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
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
            <View
              style={{
                width: 18,
                height: 18,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 16,
                borderWidth: 1,
                borderColor: count === 1 ? '#848484' : '#2C2C2C',
              }}
            >
              <EntypoIcon name="minus" size={14} color={count === 1 ? '#848484' : '#2C2C2C'} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, color: '#2C2C2C', fontWeight: '400' }}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(
                IncreasingNumberItemsCart({
                  id: plant.id,
                }),
              );
            }}
          >
            <View
              style={{
                width: 18,
                height: 18,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 16,
                borderWidth: 1,
                borderColor: '#2C2C2C',
              }}
            >
              <EntypoIcon name="plus" size={14} color="#2C2C2C" />
            </View>
          </TouchableOpacity>
        </View>
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
