import {FC} from 'react';
import {Heading, Image, Text} from '../../atoms';
import {Product} from '../../../types/Product';
import {Link} from 'react-router-dom';
import {PRODUCT_PAGE_PATH} from '../../../constants';

const ProductCard: FC<Product> = ({id, image, title, price}) => {
	return (
		<div className="w-full bg-white max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
			<div className="h-56 w-full p-3">
				<Link to={`${PRODUCT_PAGE_PATH}/${id}`}>
					<Image
						src={image}
						alt={title}
						className="w-full h-full object-contain mix-blend-multiply"
					/>
				</Link>
			</div>
			<div className="px-3 py-3">
				<Heading
					level="h5"
					className="text-gray-700 tracking-normal font-medium mt-2"
				>
					{title}
				</Heading>
				<Text tagType="span" className="text-gray-500 mt-2">
					{price.toLocaleString('en-IN', {
						style: 'currency',
						currency: 'INR',
					})}
				</Text>
			</div>
		</div>
	);
};
export default ProductCard;
