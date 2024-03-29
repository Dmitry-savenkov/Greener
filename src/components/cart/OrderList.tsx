// Lib
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Components
import CartList from './CartList';

// Actions
import { DeleteItemFromCard } from '../../redux/actions/cart';

const OrderList = ({ navigation }) => {
  const { items } = useSelector((state: any) => ({
    items: state?.Cart?.items,
  }));

  const dispatch = useDispatch();

  const onDismiss = useCallback((item) => {
    dispatch(DeleteItemFromCard(item));
  }, []);

  return useMemo(
    () => (
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Order List</Text>
        {items.map(({ plant, activeImageObject, count }) => (
          <CartList
            key={plant.title + Math.random()}
            onDismiss={onDismiss}
            plant={plant}
            count={count}
            activeImageObject={activeImageObject}
            navigation={navigation}
          />
        ))}
      </View>
    ),
    [items],
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
