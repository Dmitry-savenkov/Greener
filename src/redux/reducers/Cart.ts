// Lib
import { handleActions } from 'redux-actions';

// Actions
import { AddItemToCard } from '../actions/user';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [AddItemToCard]: (state: any, { payload }: any) => ({
      items: [...state.items, payload],
    }),
  },
  initialState,
);
