// Lib
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { BottomSheetModal, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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
    bottomSheetModalRef.current?.close();
    bottomSheetModalRef.current?.present();
  }, []);

  return useMemo(
    () => (
      <View>
        <View>
          <Text style={[styles.title]}>Shipping Address</Text>
        </View>
        <View style={[styles.container]}>
          <View style={[styles.iconWrapperGray]}>
            <View style={[styles.iconWrapperGreen]}>
              <FontAwesome5Icon name={'map-marker-alt'} size={16} color={'white'} />
            </View>
          </View>
          <View>
            <Text style={[styles.shippingAddressName]}>
              {shippingAddress.name ? shippingAddress.name : 'Home'}
            </Text>
            <Text style={[styles.shippingAddress]}>
              {shippingAddress.address ? shippingAddress.address : '61480 Sunbrook Park, PC 5674'}
            </Text>
          </View>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <View style={[styles.editWrapper]}>
              <FeatherIcon name="edit-3" size={22} color="rgb(94,202,133)" />
            </View>
          </TouchableOpacity>
          <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints}>
            <View style={[styles.bottomSheetContainer]}>
              <View style={[styles.bottomSheetTitleWrapper]}>
                <Text style={[styles.bottomSheetTitle]}>Address Details</Text>
              </View>
              <GrayLine
                width={'100%'}
                height={0.8}
                backgroundColor={colors.grayDefault}
                marginTop={15}
              />
              <Text style={[styles.fieldTitle]}>Name Address</Text>
              <BottomSheetTextInput
                onChangeText={(value) => setAddressName(value)}
                value={addressName}
                style={[styles.textInput]}
              />
              <Text style={[styles.fieldTitle]}>Address Details</Text>
              <BottomSheetTextInput
                onChangeText={(value) => setAddressDetails(value)}
                value={addressDetails}
                style={[styles.textInput]}
              />
              <View style={[styles.checkboxWrapper]}>
                <Checkbox
                  style={[styles.checkbox]}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? 'rgb(87, 189,122)' : undefined}
                />
                <Text style={[styles.checkboxText]}>Make this as the default address</Text>
              </View>
              <TouchableOpacity onPress={() => updateShippingAddress()}>
                <View style={[styles.buttonWrapper]}>
                  <Text style={[styles.buttonText]}>Add</Text>
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
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    marginTop: 20,
    borderRadius: 20,
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapperGray: {
    marginLeft: 10,
    width: 45,
    height: 45,
    backgroundColor: 'rgb(240,250,245)',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapperGreen: {
    width: 30,
    height: 30,
    backgroundColor: 'rgb(94,202,133)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shippingAddressName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  shippingAddress: {
    fontSize: 12,
    fontWeight: '400',
  },
  editWrapper: {
    paddingRight: 20,
    paddingTop: 2,
  },
  bottomSheetContainer: {
    paddingHorizontal: 30,
  },
  bottomSheetTitleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  taskTitle: {
    fontSize: 16,
  },
  buttonWrapper: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(87, 189,122)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  checkbox: {
    marginRight: 10,
    borderColor: 'rgb(87, 189,122)',
    borderRadius: 6,
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: '500',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  textInput: {
    borderRadius: 8,
    backgroundColor: 'rgb(247,247,247)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  fieldTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 15,
  },
});

export default ShippingAddress;
