import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProducts} from '../../services';
import {AppState} from '../store/store';

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async () => {
		const products = await fetchProducts();
		return products;
	},
	{
		condition: (_, {getState}) => {
			const {
				products: {loading},
			} = getState() as AppState;
			return loading;
		},
	}
);
