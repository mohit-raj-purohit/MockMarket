import {useEffect, useState} from 'react';
import {Product} from '../types/Product';
import {fetchProducts} from '../services';

const useProductList = (category: string = '') => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchProductData = async () => {
			console.log(category);
			try {
				const productData = await fetchProducts(category);
				setProducts(productData);
			} catch (err) {
				setError('Error fetching products');
			} finally {
				setLoading(false);
			}
		};

		fetchProductData();
	}, [category]);

	return {products, loading, error};
};

export default useProductList;
