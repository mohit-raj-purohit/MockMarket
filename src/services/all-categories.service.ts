import axios from 'axios';

export const getCategories = async () => {
	try {
		const response = await axios.get<string[]>(
			'https://fakestoreapi.com/products/categories'
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching categories:', error);
		return [];
	}
};
