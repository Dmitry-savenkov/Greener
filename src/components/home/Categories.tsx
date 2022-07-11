// Lib
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

// UI
import { colors, width } from '../../constants/theme';

const Categories = () => {
  const { categoriesMain } = useSelector((state) => ({
    categoriesMain: state?.CategoriesMain.categoriesMain,
  }));

  return (
    <Fragment>
      <View style={[styles.blockTitleWrapper]}>
        <Text style={[styles.blockTitle]}>Categories</Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categoriesMain}
        decelerationRate="fast"
        bounces={false}
        keyExtractor={(item, index) => {
          return item.id + index.toString();
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: index === 0 ? width * 0.08 : 18,
              marginRight: index + 1 === categoriesMain.length ? width * 0.08 : 0,
            }}
          >
            <View style={[styles.categoriesItem]}>
              <View style={[styles.categoriesImageWrapper]}>
                <Image source={item.image} />
              </View>
              <Text style={[styles.categoriesTitle]}>{item.shortName}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  blockTitleWrapper: {
    marginLeft: width * 0.08,
    marginTop: 24,
  },
  blockTitle: {
    color: colors.grayDefault,
    fontSize: 24,
    fontWeight: '600',
  },
  categoriesItem: {
    marginBottom: 10,
    marginTop: 14,
    width: 80,
    height: 78,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.blackPrimary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.09,
    shadowRadius: 5,
  },
  categoriesImageWrapper: {
    width: 40,
    height: 40,
    backgroundColor: colors.greenLight,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.grayDefault,
    marginTop: 5,
  },
});

export default Categories;
