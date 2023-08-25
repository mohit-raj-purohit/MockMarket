import {FC} from 'react';
import Skeleton, {SkeletonProps} from 'react-loading-skeleton';

export const TeaserCardSkeleton: FC<SkeletonProps & {repeat?: number}> = ({
	repeat = 1,
}) => {
	const skeletons = Array.from({length: repeat}, (_, index) => (
		<div className="h-64 rounded-md overflow-hidden bg-cover bg-center" key={index}>
			<div className="bg-gray-900 bg-opacity-70 flex items-center h-full">
				<div className="px-10 max-w-xl">
					<Skeleton width={150} className="heading-h2" />
					<Skeleton width={300} count={1.7} className="mt-2" />
					<Skeleton width={150} height={36} className="mt-4" />
				</div>
			</div>
		</div>
	));
	return <>{skeletons}</>;
};
