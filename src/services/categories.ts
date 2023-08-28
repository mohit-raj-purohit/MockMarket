import {CATEGORIES_URL} from '../constants/api';
import {apiInstance} from './apiInstance';

export const fetchCategories = async () => {
	const {data} = await apiInstance.get(CATEGORIES_URL);
	return data;
};
