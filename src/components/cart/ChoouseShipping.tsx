import React, { useCallback, useMemo, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { View, Button, StyleSheet, Text } from 'react-native';

const ChoouseShipping = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View>
      <Button onPress={handlePresentModalPress} title="open modal" color="black" />
      <BottomSheetModal ref={bottomSheetModalRef} index={1} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text></Text>
        </View>
      </BottomSheetModal>
    </View>
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
