import {FC} from 'react';
import Skeleton, {SkeletonProps} from 'react-loading-skeleton';
import {TeaserCardWrapper} from './_TeaserCardWrapper';

export const TeaserCardSkeleton: FC<SkeletonProps & {repeat?: number}> = ({
	repeat = 1,
}) => {
	const skeletons = Array.from({length: repeat}, (_, index) => (
		<TeaserCardWrapper key={index}>
			<Skeleton width={150} className="heading-h2" />
			<Skeleton width={300} count={1.7} className="mt-2" />
			<Skeleton width={150} height={36} className="mt-4" />
		</TeaserCardWrapper>
	));
	return <>{skeletons}</>;
};
