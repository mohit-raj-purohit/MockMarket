import {useParams} from 'react-router-dom';
import Container from '../../molecules/Container/Container';
import useProductsForCategory from '../../../hooks/useProductsForCategory';
import {ProductList} from '../../organisms';

const Category = () => {
	let {categoryId} = useParams();
	const {
		products,
		categoryTitle,
		loading: productsLoading,
	} = useProductsForCategory(categoryId);
	return (
		<>
			<Container className="py-10">
				<ProductList
					title={categoryTitle}
					skeletonCount={16}
					isLoading={productsLoading}
					productList={products}
				/>
			</Container>
		</>
	);
};

export default Category;
