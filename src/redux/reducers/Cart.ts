// Lib
import { handleActions } from 'redux-actions';

// Actions
import {
  AddItemToCard,
  DeleteItemFromCard,
  IncreasingNumberItemsCart,
  DecreasingNumberItemsCart,
} from '../actions/cart';

const initialState = {
  items: [],
};

export default handleActions(
  {
    [AddItemToCard]: (state: any, { payload }: any) => {
      const index = state.items.findIndex(
        (item) =>
          item.activeImageObject.title === payload.activeImageObject.title &&
          item.activeImageObject.color === payload.activeImageObject.color &&
          item.activeImageObject.size === payload.activeImageObject.size,
      );
      return index !== -1
        ? {
            items: [
              ...state.items.map((item, i) => {
                return i === index ? { ...item, count: item.count + 1 } : item;
              }),
            ],
          }
        : {
            items: [
              ...state.items,
              {
                plant: { ...payload.plant, id: payload.id },
                activeImageObject: payload.activeImageObject,
                count: payload.count,
              },
            ],
          };
    },
    [DeleteItemFromCard]: (state, { payload }) => ({
      items: state.items.filter((item) => item.plant.id !== payload.id),
    }),
    [IncreasingNumberItemsCart]: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.plant.id === payload.id);
      return index !== -1
        ? {
            items: [
              ...state.items.map((item, i) => {
                return i === index ? { ...item, count: item.count + 1 } : item;
              }),
            ],
          }
        : {
            items: [
              ...state.items,
              {
                plant: { ...payload.plant, id: payload.id },
                activeImageObject: payload.activeImageObject,
                count: payload.count,
              },
            ],
          };
    },
    [DecreasingNumberItemsCart]: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.plant.id === payload.id);
      return index !== -1
        ? {
            items: [
              ...state.items.map((item, i) => {
                return i === index ? { ...item, count: item.count - 1 } : item;
              }),
            ],
          }
        : {
            items: [
              ...state.items,
              {
                plant: { ...payload.plant, id: payload.id },
                activeImageObject: payload.activeImageObject,
                count: payload.count,
              },
            ],
          };
    },
  },
  initialState,
);
