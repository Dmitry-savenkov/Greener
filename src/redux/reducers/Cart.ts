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
      items: [
        ...state.items,
        {
          plant: { ...payload.plant, id: payload.id },
          activeImageObject: payload.activeImageObject,
        },
      ],
    }),
    [deleteItemFromCard]: (state, { payload }) => ({
      items: state.items.filter((item) => item.plant.id !== payload.id),
    }),
  },
  initialState,
);
