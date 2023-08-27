import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCategories} from '../../services';
import {AppState} from '../store/store';

export const getCategories = createAsyncThunk(
	'categories/getCategories',
	async () => {
		const newCategories = await fetchCategories();
		return newCategories;
	},
	{
		condition: (_, {getState}) => {
			const {
				categories: {loading},
			} = getState() as AppState;
			return loading;
		},
	}
);
