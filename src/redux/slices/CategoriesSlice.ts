import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../../types/Category';
import {getCategories} from '../thunks/categoriesThunks';

export interface CategoriesState {
	categories: Category[];
	loading: boolean;
	error: string;
}

const initialState: CategoriesState = {
	categories: [],
	loading: true,
	error: '',
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
	extraReducers(builder) {
		builder
			.addCase(getCategories.pending, (state) => {
				state.loading = true;
			})
			.addCase(getCategories.fulfilled, (state, {payload: categories}) => {
				state.loading = false;
				state.categories = categories;
			})
			.addCase(getCategories.rejected, (state) => {
				state.loading = false;
				state.error = 'Error in loading category';
			});
	},
});

export const {setCategories, setLoading} = categoriesSlice.actions;

export default categoriesSlice.reducer;
