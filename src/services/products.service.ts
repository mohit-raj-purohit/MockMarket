import axios from 'axios';
export interface Rating {
	rate: number;
	count: number;
}

export interface Product {
	id: number;
	title: string;
	category: string;
	image: string;
	price: number;
	rating: Rating;
}

export const getProductsByCategory = async (
	category: string,
	limit: number = 10
) => {
	try {
		const response = await axios.get<Product[]>(
			`https://fakestoreapi.com/products/category/${category}?limit=${limit}`
		);
		return response.data;
	} catch (error) {
		console.error(
			`Error fetching products in ${category} category:`,
			error
		);
		return [];
	}
};
