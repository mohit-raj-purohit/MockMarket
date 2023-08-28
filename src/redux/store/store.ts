import {configureStore} from '@reduxjs/toolkit';
import CartSlice from '../slices/CartSlice';
import CategoriesSlice from '../slices/CategoriesSlice';
import ProductsSlice from '../slices/ProductsSlice';

const store = configureStore({
	reducer: {
		cart: CartSlice,
		categories: CategoriesSlice,
		products: ProductsSlice
	},
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
