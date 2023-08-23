import {FC, ReactNode} from 'react';
import {Heading, Image, Text} from '../../atoms';
import {Product} from '../../../services';
import Skeleton, {SkeletonProps} from 'react-loading-skeleton';

interface ReactChildrenProps {
	children: ReactNode;
}

const ProductImageWrapper: FC<ReactChildrenProps> = ({children}) => {
	return <div className="h-56 w-full p-3">{children}</div>;
};

const ProductInfoWrapper: FC<ReactChildrenProps> = ({children}) => {
	return <div className="px-3 py-3">{children}</div>;
};

const ProductMainWrapper: FC<ReactChildrenProps> = ({children}) => {
	return (
		<div className="w-full bg-white max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
			{children}
		</div>
	);
};

const ProductCard: FC<Product> = ({image, title, price}) => {
	return (
		<ProductMainWrapper>
			<ProductImageWrapper>
				<Image
					src={image}
					alt={title}
					className="w-full h-full object-contain mix-blend-multiply"
				/>
			</ProductImageWrapper>
			<ProductInfoWrapper>
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
			</ProductInfoWrapper>
		</ProductMainWrapper>
	);
};

const ProductCardSkeleton: FC<SkeletonProps & {repeat?: number}> = ({
	repeat = 1,
}) => {
	const skeletons = Array.from({length: repeat}, (_, index) => (
		<ProductMainWrapper key={index}>
			<ProductImageWrapper>
				<Skeleton height={210} />
			</ProductImageWrapper>
			<ProductInfoWrapper>
				<Skeleton
					count={2}
					className="mt-2 font-medium"
				/>
				<Skeleton width={80} />
			</ProductInfoWrapper>
		</ProductMainWrapper>
	));
	return <>{skeletons}</>;
};

export {ProductCardSkeleton};
export default ProductCard;
