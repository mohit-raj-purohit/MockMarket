import React from 'react';
import {Heading} from '../../atoms';
import {ProductCard} from '../../molecules';
import {Product} from '../../../types/Product';
import {ProductListProps} from '../../../types/ProductListProps';
import ProductListSkeleton from './ProductListSkeleton';

const ProductList: React.FC<ProductListProps> = ({
	title,
	productList,
	isLoading,
}) => {
	if (isLoading) {
		return <ProductListSkeleton />;
	}
	return (
		<div className="mt-12">
			<Heading level="h2" className="text-gray-600">
				{title}
			</Heading>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
				{productList.map((product: Product, index: number) => (
					<ProductCard {...product} key={index} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
