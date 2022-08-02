// Libs
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

// Actions
import { DecreasingNumberItemsCart, IncreasingNumberItemsCart } from '../../redux/actions/cart';

// Components
import EntypoIcon from '../icons/EntypoIcon';

const CartListItem = ({ navigation, plant, activeImageObject, count }) => {
  const { color, image, planter, size, price } = activeImageObject;

  const dispatch = useDispatch();

  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PlantsCategoryItem', { item: plant });
        }}
      >
        <Image source={image} style={[styles.previewImage]} />
      </TouchableOpacity>
      <View style={[styles.payloadContainer]}>
        <Text style={[styles.title]}>{plant.title}</Text>
        <View style={[styles.informationWrapper]}>
          <Text style={[styles.informationItem]}>{size} / </Text>
          <Text style={[styles.informationItem]}>{color} / </Text>
          <Text style={[styles.informationItem]}>{planter} </Text>
        </View>
        <View style={[styles.priceWrapper]}>
          <Text style={[styles.informationItem]}>{price}$</Text>
        </View>
        <View style={[styles.countWrapper]}>
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
              style={[
                styles.countButton,
                {
                  borderColor: count === 1 ? '#848484' : '#2C2C2C',
                },
              ]}
            >
              <EntypoIcon name="minus" size={14} color={count === 1 ? '#848484' : '#2C2C2C'} />
            </View>
          </TouchableOpacity>
          <Text style={[styles.count]}>{count}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(
                IncreasingNumberItemsCart({
                  id: plant.id,
                }),
              );
            }}
          >
            <View style={[styles.countButton]}>
              <EntypoIcon name="plus" size={14} color="#2C2C2C" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  previewImage: {
    width: 80,
    height: 100,
    borderRadius: 8,
  },
  payloadContainer: {
    marginLeft: 15,
    marginTop: 6,
  },
  title: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '400',
  },
  informationWrapper: {
    flexDirection: 'row',
    marginTop: 6,
  },
  informationItem: {
    fontSize: 14,
    color: '#2C2C2C',
    fontWeight: '400',
  },
  priceWrapper: {
    marginTop: 6,
  },
  count: {
    fontSize: 16,
    color: '#2C2C2C',
    fontWeight: '400',
  },
  countWrapper: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  countButton: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2C2C2C',
  },
});

export default CartListItem;
