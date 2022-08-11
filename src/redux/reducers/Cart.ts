// Lib
import { handleActions } from 'redux-actions';

// Actions
import {
  AddItemToCard,
  DeleteItemFromCard,
  IncreasingNumberItemsCart,
  DecreasingNumberItemsCart,
  UpdateShippingAddress,
} from '../actions/cart';

const initialState = {
  shippingAddress: {
    name: null,
    address: null,
    defaultAddress: false,
  },
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
            ...state,
            items: [
              ...state.items.map((item, i) => {
                return i === index ? { ...item, count: item.count + 1 } : item;
              }),
            ],
          }
        : {
            ...state,
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
      ...state,
      items: state.items.filter((item) => item.plant.id !== payload.id),
    }),
    [IncreasingNumberItemsCart]: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.plant.id === payload.id);
      return index !== -1
        ? {
            ...state,
            items: [
              ...state.items.map((item, i) => {
                return i === index ? { ...item, count: item.count + 1 } : item;
              }),
            ],
          }
        : {
            ...state,
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
            ...state,
            items: [
              ...state.items.map((item, i) => {
                return i === index ? { ...item, count: item.count - 1 } : item;
              }),
            ],
          }
        : {
            ...state,
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
    [UpdateShippingAddress]: (state: any, { payload }: any) => ({
      ...state,
      shippingAddress: {
        name: payload.name,
        address: payload.address,
        defaultAddress: payload.defaultAddress,
      },
    }),
  },
  initialState,
);
