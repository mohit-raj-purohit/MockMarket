import {createAsyncThunk} from '@reduxjs/toolkit';
import {setCategories} from '../slices/CategoriesSlice';
import {AppState} from '../store/store';
import {fetchCategories} from '../../services';
import {arraysAreEqual} from '../../utils';

export const getCategories = createAsyncThunk(
	'categories/getCategories',
	async (_, {getState, dispatch}) => {
		const newCategories = await fetchCategories();

		const currentState = (getState() as AppState).categories.categories;

		if (!arraysAreEqual(currentState, newCategories)) {
			dispatch(setCategories(newCategories));
		}
		return newCategories;
	}
);
