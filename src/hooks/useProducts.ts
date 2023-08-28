import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, AppState} from '../redux/store/store';
import {getProducts} from '../redux/thunks/productsThunks';

const useProducts = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {loading, products} = useSelector(
		(state: AppState) => state.products
	);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return {products, loading};
};

export default useProducts;
