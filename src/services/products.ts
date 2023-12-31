import {CATEGORY_URL, PRODUCTS_URL} from '../constants/api';
import {apiInstance} from './apiInstance';

export const fetchProducts = async (category?: string) => {
	const url = category ? `${CATEGORY_URL}${category}` : PRODUCTS_URL;
	const {data} = await apiInstance.get(url);
	return data;
};
