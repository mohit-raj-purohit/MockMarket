// src/hooks/useCategories.ts
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppState} from '../redux/store/store';
import {getCategories} from '../redux/thunks/categoriesThunks';

const useCategories = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {loading, categories} = useSelector(
		(state: AppState) => state.categories
	);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	return {categories, loading};
};

export default useCategories;
