import React from 'react';
import {Heading} from '../../atoms';
import {ProductCardSkeleton} from '../../molecules';
import Skeleton from 'react-loading-skeleton';

const ProductListSkeleton: React.FC = () => {
	return (
		<div className="mt-12">
			<Heading level="h2" className="text-gray-600">
				<Skeleton width={200} />
			</Heading>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
				<ProductCardSkeleton repeat={4} />
			</div>
		</div>
	);
};

export default ProductListSkeleton;
