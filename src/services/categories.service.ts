import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://fakestoreapi.com',
});

export const fetchCategories = async () => {
	const response = await instance.get('/products/categories');
	return response.data;
};
