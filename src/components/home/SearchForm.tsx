// Lib
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';

//Components
import AntDesignIcon from '../icons/AntDesignIcon';

// UI
import { colors } from '../../constants/theme';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={[styles.searchForm]}>
      <TouchableOpacity>
        <View style={[styles.searchIconWrapper]}>
          <AntDesignIcon name="search1" size={20} color="#C5CCD6" />
        </View>
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        style={[styles.searchFormInput]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchForm: {
    flexDirection: 'row',
    width: '85%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    shadowColor: colors.blackPrimary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  searchFormInput: {
    marginRight: 15,
    width: '85%',
  },
  searchIconWrapper: {
    paddingVertical: 7,
    paddingRight: 12,
  },
});

export default SearchForm;
