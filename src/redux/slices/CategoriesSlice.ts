import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../../types/Category';

export interface CategoriesState {
	categories: Category[];
	loading: boolean;
}

const initialState: CategoriesState = {
	categories: [],
	loading: true,
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		setCategories: (state, action) => {
			state.categories = action.payload;
			state.loading = false;
		},
		setLoading: (state) => {
			state.loading = true;
		},
	},
});

export const {setCategories, setLoading} = categoriesSlice.actions;

export default categoriesSlice.reducer;
