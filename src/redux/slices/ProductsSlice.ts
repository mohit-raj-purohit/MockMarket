import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../types/Product';
import {getProducts} from '../thunks/productsThunks';

export interface ProductsState {
	products: Product[];
	loading: boolean;
	error: string;
}

const initialState: ProductsState = {
	products: [],
	loading: true,
	error: '',
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, {payload: products}) => {
			state.products = products;
			state.loading = false;
		},
		setLoading: (state) => {
			state.loading = true;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProducts.fulfilled, (state, {payload: products}) => {
				state.loading = false;
				state.products = products;
			})
			.addCase(getProducts.rejected, (state) => {
				state.loading = false;
				state.error = 'Error in loading products';
			});
	},
});

export const {setProducts, setLoading} = productsSlice.actions;

export default productsSlice.reducer;
