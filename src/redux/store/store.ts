import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../slices/CartSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice
	},
});

export default store;

//TODO:
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;