// Lib
import React, { useCallback, useMemo, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from '../icons/MaterialCommunityIcon';

// UI
import { colors } from '../../constants/theme';

// Components
import AntDesignIcon from '../icons/AntDesignIcon';

const ChoouseShipping = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return useMemo(
    () => (
      <View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Shipping Type</Text>
        </View>
        <TouchableOpacity
          onPress={handlePresentModalPress}
          style={{
            marginTop: 20,
            borderRadius: 15,
            paddingHorizontal: 15,
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 15 }}>
              <MaterialCommunityIcon
                name="truck-cargo-container"
                size={26}
                color="rgb(94,202,133)"
              />
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Choose Shipping Type</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={{ paddingRight: 8 }}>
              <AntDesignIcon name="right" size={24} color={colors.black} />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
        <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints}>
          <Text></Text>
        </BottomSheetModal>
      </View>
    ),
    [handlePresentModalPress, snapPoints],
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ChoouseShipping;
