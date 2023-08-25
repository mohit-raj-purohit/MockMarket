import { useParams } from 'react-router-dom';
import Container from '../../molecules/Container/Container';

const Product = () => {
	let { productId } = useParams();
	return (
		<>
			<Container className="py-10">
				Product {productId}
			</Container>
		</>
	);
};

export default Product;
