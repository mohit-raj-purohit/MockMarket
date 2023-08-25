import {CATEGORIES_URL} from '../constants/api';
import {apiInstance} from './apiInstance';

export const fetchCategories = async () => {
	const response = await apiInstance.get(CATEGORIES_URL);
	return response.data;
};
