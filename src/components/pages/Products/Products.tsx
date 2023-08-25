import {useProducts} from '../../../hooks';
import Container from '../../molecules/Container/Container';
import {ProductList} from '../../organisms';

const Products = () => {
	const {products, loading} = useProducts();
	return (
		<>
			<Container className="py-10">
				<ProductList title='All products' skeletonCount={16} isLoading={loading} productList={products} />
			</Container>
		</>
	);
};

export default Products;
