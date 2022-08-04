// Lib
import { combineReducers } from 'redux';

// Reducers
import User from './User';
import Cart from './Cart';
import BestPlants from './BestPlants';
import CategoriesMain from './CategoriesMain';
import BestPlantsSelling from './BestPlantsSelling';

export default combineReducers({
  User,
  Cart,
  BestPlants,
  CategoriesMain,
  BestPlantsSelling,
});
