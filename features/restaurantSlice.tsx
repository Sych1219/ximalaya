import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {RestaurantCardsProps} from '@components/RestaurantCards';

// Define a type for the slice state
interface RestaurantState {
  restaurant: RestaurantCardsProps;
}
// Define the initial state using that type
const initialState: RestaurantState = {
  restaurant: {
    id: 0,
    imageUrl: '',
    title: '',
    rateing: 0,
    genre: '',
    address: '',
    short_description: '',
    dishes: [],
    long: 0,
    lat: 0,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const {setRestaurant} = restaurantSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRestaurant = (state: RootState) =>
  state.restaurant.restaurant;

// export const selectBasketItemWithId = (state: RootState, id: string) =>
//   state.basket.items.filter(item => item.id === id);
//
// export const selectBasketTotal = (state: RootState) =>
//   state.basket.items.reduce((total, item) => total + item.price, 0);

export default restaurantSlice.reducer;
