import {FC} from 'react';
import Skeleton, {SkeletonProps} from 'react-loading-skeleton';

const ProductCardSkeleton: FC<SkeletonProps & {repeat?: number}> = ({
	repeat = 1,
}) => {
	const skeletons = Array.from({length: repeat}, (_, index) => (
		<div
			className="w-full bg-white max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
			key={index}
		>
			<div className="h-56 w-full p-3">
				<Skeleton height={210} />
			</div>
			<div className="px-3 py-3">
				<Skeleton count={2} className="mt-2 font-medium" />
				<Skeleton width={80} />
			</div>
		</div>
	));
	return <>{skeletons}</>;
};

export default ProductCardSkeleton;
