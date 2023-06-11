import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {DishRowProps} from '@components/DishRow';

// Define a type for the slice state
interface BasketState {
  items: DishRowProps[];
}
// interface BasketItem {
//   id: string;
//   name: string;
// }

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // state.items = state.items.filter(action.payload);
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      let newBasket = [...state.items];
      if (index > -1) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in basket!`,
        );
      }

      state.items = newBasket;
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasket = (state: RootState) => state.basket.items;

export const selectBasketItemWithId = (state: RootState, id: string) =>
  state.basket.items.filter(item => item.id === id);

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
