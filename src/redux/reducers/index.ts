// Lib
import { combineReducers } from 'redux';

// Reducers
import User from './User';
import BestPlants from './BestPlants';
import CategoriesMain from './CategoriesMain';

export default combineReducers({
  User,
  BestPlants,
  CategoriesMain,
});
