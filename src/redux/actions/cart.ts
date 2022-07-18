// Lib
import { createAction } from 'redux-actions';

export const AddItemToCard = createAction('ADD_ITEM_TO_CARD');
export const DeleteItemFromCard = createAction('DELETE_ITEM_FROM_CARD');
export const IncreasingNumberItemsCart = createAction('INCREASING_NUMBER_ITEMS_CART');
export const DecreasingNumberItemsCart = createAction('DECREASING_NUMBER_ITEMS_CART');
