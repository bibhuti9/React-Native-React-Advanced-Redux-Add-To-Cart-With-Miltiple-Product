import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userCurrentLocation: {
    latitude: '',
    longitude: '',
  },
  currentSelectedCategoryId: 0,
  itemBasket: new Map(),
  totalAmount: 0,
};

export const backetSlicer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setUserCurrentLocation: (state, actions) => {
      state.userCurrentLocation = actions.payload;
    },
    addToItemBasket: (state, action) => {
      const item = action.payload;
      if (state.itemBasket.has(item._id)) {
        state.itemBasket.set(item._id, {
          ...state.itemBasket.get(item._id),
          ...{count: state.itemBasket.get(item._id).count + 1},
        });
      } else {
        state.itemBasket.set(item._id, {
          _id: item._id,
          count: 1,
        });
      }
      state.totalAmount = state.totalAmount + item.mprice;
    },
    removeFromItemBasket: (state, action) => {
      const item = action.payload;
      if (state.itemBasket.has(item._id)) {
        state.itemBasket.set(item._id, {
          ...state.itemBasket.get(item._id),
          ...{count: state.itemBasket.get(item._id).count - 1},
        });
      } else {
        return;
      }
      if (state.itemBasket.get(item._id).count == 0) {
        state.itemBasket.delete(item._id);
      }
      state.totalAmount = state.totalAmount - item.mprice;
    },
  },
  setCurrentSelectedCategoryId: (state, actions) => {
    state.currentSelectedCategoryId = actions.payload;
  },
});

// Action creators are generated for each case reducer function
export const {setUserCurrentLocation, addToItemBasket, removeFromItemBasket} =
  backetSlicer.actions;
export const selectUserCurrentLocation = state =>
  state.basket.userCurrentLocation;
export const selectCurrentSelectedCategoryId = state =>
  state.backetSlicer.currentSelectedCategoryId;

export const selectTotalAmount = state => state.basket.totalAmount;

export const selectBasketItemById = (state, id) =>
  state.basket.itemBasket.get(id);

export const selectItemBasket = state => state.basket.itemBasket;

export default backetSlicer.reducer;
