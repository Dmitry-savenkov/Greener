// Lib
import React, { useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Components
import CartList from './CartList';

// Actions
import { deleteItemFromCard } from '../../redux/actions/user';

const OrderList = ({ navigation }) => {
  const { items } = useSelector((state: any) => ({
    items: state?.Cart?.items,
  }));

  const dispatch = useDispatch();

  const onDismiss = useCallback((item) => {
    dispatch(deleteItemFromCard(item));
  }, []);

  return (
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
