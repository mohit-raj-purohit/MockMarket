// categoriesThunks.ts
import {createAsyncThunk} from '@reduxjs/toolkit';
import {setCategories} from '../slices/CategoriesSlice';
import {AppState} from '../store/store';
import {fetchCategories} from '../../services';

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

// Utility function to compare arrays
function arraysAreEqual(arr1: any[], arr2: any[]) {
	return JSON.stringify(arr1) === JSON.stringify(arr2);
}
