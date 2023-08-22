import React from 'react';
import {Heading} from '../../atoms';
import {ProductCard, ProductCardSkeleton} from '../../molecules';
import {Product} from '../../../services';
import Skeleton from 'react-loading-skeleton';

interface ProductListProps {
	title: string;
	productList: Array<Product>;
}

const ProductList: React.FC<ProductListProps> = ({title, productList}) => {
	return (
		<div className="mt-12">
			<Heading level="h2" className="text-gray-600">
				{title || <Skeleton width={200} />}
			</Heading>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
				{productList.length ? (
					productList.map((product: Product, index: number) => (
						<ProductCard {...product} key={index} />
					))
				) : (
					<ProductCardSkeleton repeat={4} />
				)}
			</div>
		</div>
	);
};

export default ProductList;
