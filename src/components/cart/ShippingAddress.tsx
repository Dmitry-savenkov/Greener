// Lib
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Components
import FeatherIcon from '../icons/FeatherIcon';
import FontAwesome5Icon from '../icons/FontAwesome5Icon';
import GrayLine from '../GrayLine';

// UI
import { colors } from '../../constants/theme';

// Actions
import { UpdateShippingAddress } from '../../redux/actions/cart';

// Selectors
import { getShippingAddress } from '../../redux/selectors';

const ShippingAddress = () => {
  const shippingAddress = useSelector(getShippingAddress);

  const [addressName, setAddressName] = useState('');
  const [addressDetails, setAddressDetails] = useState('');
  const [isChecked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const updateShippingAddress = useCallback(() => {
    dispatch(
      UpdateShippingAddress({
        name: addressName,
        address: addressDetails,
        defaultAddress: isChecked,
      }),
    );
    bottomSheetModalRef.current?.close();
  }, [addressDetails, addressName, dispatch, isChecked]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return useMemo(
    () => (
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
            <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 4 }}>
              {shippingAddress.name}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '400' }}>{shippingAddress.address}</Text>
          </View>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <View style={{ paddingRight: 20, paddingTop: 2 }}>
              <FeatherIcon name="edit-3" size={22} color="rgb(94,202,133)" />
            </View>
          </TouchableOpacity>
          <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints}>
            <View style={{ paddingHorizontal: 30 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Address Details</Text>
              </View>
              <GrayLine
                width={'100%'}
                height={0.8}
                backgroundColor={colors.grayDefault}
                marginTop={15}
              />
              <View style={{ marginTop: 15 }}>
                <Text style={{ fontSize: 15, fontWeight: '600', marginBottom: 15 }}>
                  Name Address
                </Text>
                <TextInput
                  onChangeText={(value) => setAddressName(value)}
                  value={addressName}
                  style={{
                    borderRadius: 8,
                    backgroundColor: 'rgb(247,247,247)',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 15 }}>
                  Address Details
                </Text>
                <TextInput
                  onChangeText={(value) => setAddressDetails(value)}
                  value={addressDetails}
                  style={{
                    borderRadius: 8,
                    backgroundColor: 'rgb(247,247,247)',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    marginTop: 10,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 20,
                  marginBottom: 40,
                }}
              >
                <Checkbox
                  style={{ marginRight: 10, borderColor: 'rgb(87, 189,122)', borderRadius: 6 }}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? 'rgb(87, 189,122)' : undefined}
                />
                <Text style={{ fontSize: 14, fontWeight: '500' }}>
                  Make this as the default address
                </Text>
              </View>
              <TouchableOpacity onPress={() => updateShippingAddress()}>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: 'rgb(87, 189,122)',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>Add</Text>
                </View>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </View>
      </View>
    ),
    [
      addressDetails,
      addressName,
      handlePresentModalPress,
      isChecked,
      shippingAddress.address,
      shippingAddress.name,
      snapPoints,
      updateShippingAddress,
    ],
  );
};

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 16,
  },
});

export default ShippingAddress;
