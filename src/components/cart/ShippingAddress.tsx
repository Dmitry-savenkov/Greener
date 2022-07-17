// Lib
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// Components
import FeatherIcon from '../icons/FeatherIcon';
import FontAwesome5Icon from '../icons/FontAwesome5Icon';

const ShippingAddress = () => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Shipping Address</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          borderRadius: 20,
          width: '100%',
          height: 80,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            marginLeft: 10,
            width: 45,
            height: 45,
            backgroundColor: 'rgb(240,250,245)',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'rgb(94,202,133)',
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesome5Icon name={'map-marker-alt'} size={16} color={'white'} />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>Home</Text>
          <Text style={{ fontSize: 12, fontWeight: '400' }}>61480 Sunbrook Park, PC 5679</Text>
        </View>
        <TouchableOpacity>
          <View style={{ paddingRight: 20, paddingTop: 2 }}>
            <FeatherIcon name="edit-3" size={22} color="rgb(94,202,133)" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 16,
  },
});

export default ShippingAddress;
