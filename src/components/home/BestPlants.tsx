// Lib
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

// UI
import { colors } from '../../constants/theme';

const BestPlants = () => {
  const { bestPlantsSelling } = useSelector((state) => ({
    bestPlantsSelling: state?.BestPlantsSelling.bestPlantsSelling,
  }));

  return (
    <Fragment>
      <View style={[styles.blockTitleWrapper]}>
        <Text style={[styles.blockTitle]}>Best Plants</Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={bestPlantsSelling}
          decelerationRate="fast"
          bounces={false}
          keyExtractor={(item, index) => {
            return item.id + index.toString();
          }}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={[styles.bestPlantsItem]}>
                <View>
                  <View style={[styles.bestPlantsLabel]}>
                    <Text style={[styles.bestPlantsLabelText]}>{item.label}</Text>
                  </View>
                  <Image source={item.previewImage} style={[styles.bestPlantsImage]} />
                </View>
                <View>
                  <Text style={[styles.bestPlantsTitle]}>{item.title}</Text>
                  <Text style={[styles.bestPlantsPrice]}>40-90$</Text>
                  <View style={[styles.bestPlantsLinkWrapper]}>
                    <Text style={[styles.bestPlantsLinkText]}>Show More</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  blockTitleWrapper: {
    marginTop: 24,
  },
  blockTitle: {
    color: colors.grayDefault,
    fontSize: 24,
    fontWeight: '600',
  },
  bestPlantsItem: {
    marginBottom: 10,
    marginTop: 10,
    marginRight: 23,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 150,
    height: 250,
    shadowColor: colors.blackPrimary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  bestPlantsLabel: {
    position: 'absolute',
    left: 0,
    top: 20,
    padding: 4,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    zIndex: 10,
    backgroundColor: colors.white,
  },
  bestPlantsLabelText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.grayDefault,
  },
  bestPlantsImage: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 150,
    height: 180,
    resizeMode: 'cover',
  },
  bestPlantsTitle: {
    marginTop: 8,
    marginLeft: 12,
    fontSize: 12,
    fontWeight: '400',
    color: colors.grayDefault,
  },
  bestPlantsPrice: {
    marginTop: 5,
    marginLeft: 12,
    fontSize: 12,
    fontWeight: '400',
    color: colors.grayDefault,
  },
  bestPlantsLinkWrapper: {
    alignItems: 'flex-end',
    marginRight: 8,
  },
  bestPlantsLinkText: {
    textDecorationLine: 'underline',
    fontSize: 12,
    fontWeight: '500',
    color: colors.grayDefault,
  },
});

export default BestPlants;
