// Lib
import React, { useState, useMemo, useCallback } from 'react';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useDispatch } from 'react-redux';

// Components
import GrayLine from '../GrayLine';

// UI
import { colors } from '../../constants/theme';

// Actions
import { UpdateShippingAddress } from '../../redux/actions/cart';

const AddressDetails = ({ handlePresentModalPress }) => {
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
    handlePresentModalPress();
  }, [addressDetails, addressName, dispatch, handlePresentModalPress, isChecked]);

  return useMemo(
    () => (
      <View style={[styles.bottomSheetContainer]}>
        <View style={[styles.bottomSheetTitleWrapper]}>
          <Text style={[styles.bottomSheetTitle]}>Address Details</Text>
        </View>
        <GrayLine width={'100%'} height={0.8} backgroundColor={colors.grayDefault} marginTop={15} />
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
    ),
    [addressDetails, addressName, isChecked, updateShippingAddress],
  );
};

const styles = StyleSheet.create({
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

export default AddressDetails;
