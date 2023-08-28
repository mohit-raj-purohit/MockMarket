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
		setCategories: (state, {payload: categories}) => {
			state.categories = categories;
			state.loading = false;
		},
		setLoading: (state) => {
			state.loading = true;
		},
		// setProductsInCategory: (state, {payload: {products, categoryId}}) => {
		// 	const category = state.categories.find(
		// 		(category) => category.id === categoryId
		// 	);
		// 	if (category && !category.products?.length) {
		// 		category.products = products;
		// 	}
		// },
	},
	extraReducers(builder) {
		builder
			.addCase(getCategories.pending, (state) => {
				state.loading = true;
			})
			.addCase(
				getCategories.fulfilled,
				(state, {payload: categories}) => {
					state.loading = false;
					state.categories = categories;
				}
			)
			.addCase(getCategories.rejected, (state) => {
				state.loading = false;
				state.error = 'Error in loading category';
			});
	},
});

export const {setCategories, setLoading} = categoriesSlice.actions;

export default categoriesSlice.reducer;
