// Lib
import { createAction } from 'redux-actions';

export const UserDataLoaded = createAction('USER_DATA_LOADED');
export const AddItemToCard = createAction('ADD_ITEM_TO_CARD');
export const deleteItemFromCard = createAction('DELETE_ITEM_FROM_CARD');
export const IncreasingNumberItemsCart = createAction('INCREASING_NUMBER_ITEMS_CART');
export const DecreasingNumberItemsCart = createAction('DECREASING_NUMBER_ITEMS_CART');
