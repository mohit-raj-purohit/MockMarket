import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCategories} from '../../services';

export const getCategories = createAsyncThunk(
	'categories/getCategories',
	async () => {
		const newCategories = await fetchCategories();
		return newCategories;
	}
);
