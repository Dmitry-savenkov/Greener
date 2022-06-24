// Lib
import { combineReducers } from 'redux';

// Reducers
import User from './User';
import BestPlants from './BestPlants';
import Browse from './Browse';

export default combineReducers({
  User,
  BestPlants,
  Browse,
});
