// Lib
import { handleActions } from 'redux-actions';

// Actions
import { AddItemToCard, deleteItemFromCard } from '../actions/user';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [AddItemToCard]: (state: any, { payload }: any) => ({
      items: [...state.items, payload],
    }),
    [deleteItemFromCard]: (state, { payload }) => ({
      items: state.items.filter((item) => item.title != payload.title),
    }),
  },
  initialState,
);
