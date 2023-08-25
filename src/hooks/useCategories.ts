// src/hooks/useCategories.ts
import {useEffect, useState} from 'react';
import { fetchCategories } from '../services';

const useCategories = () => {
	const [categories, setCategories] = useState<string[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const getCategories = async () => {
			try {
				const data = await fetchCategories();
				setCategories(data);
			} catch (err) {
				setError('Error fetching categories');
			} finally {
				setLoading(false);
			}
		};

		getCategories();
	}, []);

	return {categories, loading, error};
};

export default useCategories;
