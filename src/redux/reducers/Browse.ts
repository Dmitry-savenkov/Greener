// Lib
import { handleActions } from 'redux-actions';

const initialState = {
  homeScreenData: [
    {
      id: 'plants',
      name: 'Plants',
      tags: ['products', 'inspirations', 'houseplants'],
      count: 17,
      image: require('../../assets/icons/plants.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'seeds',
      name: 'Seeds',
      tags: ['products', 'shop', 'dried flowers'],
      count: 16,
      image: require('../../assets/icons/seeds.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'flowers',
      name: 'Flowers',
      tags: ['products', 'inspirations'],
      count: 68,
      image: require('../../assets/icons/flowers.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'sprayers',
      name: 'Sprayers',
      tags: ['products', 'shop', 'dried flowers'],
      count: 17,
      image: require('../../assets/icons/sprayers.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'pots',
      name: 'Pots',
      tags: ['products', 'shop', 'houseplants'],
      count: 47,
      image: require('../../assets/icons/pots.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'fertilizers',
      name: 'fertilizers',
      tags: ['products', 'shop'],
      count: 84,
      image: require('../../assets/icons/fertilizers.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'plants',
      name: 'Plants',
      tags: ['products', 'inspirations'],
      count: 312,
      image: require('../../assets/icons/plants.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'sprayers',
      name: 'Sprayers',
      tags: ['products', 'shop'],
      count: 7,
      image: require('../../assets/icons/sprayers.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'pots',
      name: 'Pots',
      tags: ['products', 'shop'],
      count: 41,
      image: require('../../assets/icons/pots.png'),
      navigateTo: 'Explore',
    },
    {
      id: 'fertilizers',
      name: 'fertilizers',
      tags: ['products', 'shop', 'houseplants'],
      count: 47,
      image: require('../../assets/icons/fertilizers.png'),
      navigateTo: 'Explore',
    },
  ],
  browseNameCategories: [
    { id: 'products', name: 'Products' },
    { id: 'inspirations', name: 'Inspirations' },
    { id: 'shop', name: 'Shop' },
    { id: 'houseplants', name: 'Houseplants' },
    { id: 'dried flowers', name: 'Dried flowers' },
  ],
};

export default handleActions({}, initialState);
