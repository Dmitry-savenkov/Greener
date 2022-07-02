// Lib
import { handleActions } from 'redux-actions';

const initialState = {
  categoriesMain: [
    {
      id: 'plants',
      shortName: 'Plants',
      fullName: 'Plants',
      image: require('../../assets/icons/plants.png'),
    },
    {
      id: 'planters',
      shortName: 'Planters',
      fullName: 'Planters',
      image: require('../../assets/icons/pots.png'),
    },
    {
      id: 'plantCare',
      shortName: 'Plant Care',
      fullName: 'Plant Care',
      image: require('../../assets/icons/fertilizers.png'),
    },
    {
      id: 'homeDecor',
      shortName: 'Decor',
      fullName: 'Home & Decor',
      image: require('../../assets/icons/sprayers.png'),
    },
    {
      id: 'bloomingBouquets',
      shortName: 'Bouquets',
      fullName: 'Blooming & Bouquets',
      image: require('../../assets/icons/flowers.png'),
    },
  ],
};

export default handleActions({}, initialState);
