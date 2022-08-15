// Lib
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Components
import CartList from './CartList';
import LottieAnimation from '../LottieAnimation';

// Actions
import { DeleteItemFromCard } from '../../redux/actions/cart';

// Selectors
import { getOrderListItems } from '../../redux/selectors';

// Animation
import emptyBox from '../../assets/lottie/empty-box.json';

const OrderList = ({ navigation }) => {
  const items = useSelector(getOrderListItems);

  const dispatch = useDispatch();

  const onDismiss = useCallback(
    (item) => {
      dispatch(DeleteItemFromCard(item));
    },
    [dispatch],
  );

  return useMemo(
    () => (
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Order List</Text>
        {items.length !== 0 ? (
          items.map(({ plant, activeImageObject, count }) => (
            <CartList
              key={plant.title + Math.random()}
              onDismiss={onDismiss}
              plant={plant}
              count={count}
              activeImageObject={activeImageObject}
              navigation={navigation}
            />
          ))
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <LottieAnimation
              width={100}
              height={200}
              lottieJSON={emptyBox}
              autoPlay={true}
              loop={true}
            />
          </View>
        )}
      </View>
    ),
    [items, navigation, onDismiss],
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderList;
