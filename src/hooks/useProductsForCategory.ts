import {useEffect, useState} from 'react';
import {Product} from '../types/Product';
import {fetchProducts} from '../services';
import {getCategoryData} from '../data/categoriesObj';

const useProductsForCategory = (category: string = '') => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [categoryTitle, setCategoryTitle] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchProductData = async () => {
			if (category) {
				let title = getCategoryData(category).title;
				setCategoryTitle(title);
				try {
					const productData = await fetchProducts(category);
					setProducts(productData);
				} catch (err) {
					setError('Error fetching products');
				} finally {
					setLoading(false);
				}
			}
		};

		fetchProductData();
	}, [category]);

	return {products, categoryTitle, loading, error};
};

export default useProductsForCategory;
