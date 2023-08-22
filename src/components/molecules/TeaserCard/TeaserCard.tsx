import {CSSProperties, FC, ReactNode} from 'react';
import {Button, Heading, Text} from '../../atoms';
import {ButtonComponentProps} from '../../atoms/Button/Button';
import Skeleton, {SkeletonProps} from 'react-loading-skeleton';

interface TeaserCardProps {
	backgroundImage?: string;
	title?: string;
	description?: string;
	cta?: ButtonComponentProps;
}

interface ReactChildrenProps {
	children: ReactNode;
	style?: CSSProperties;
}

const TeaserCardWrapper: FC<ReactChildrenProps> = ({children, style}) => {
	return (
		<div
			className="h-64 rounded-md overflow-hidden bg-cover bg-center"
			style={style}
		>
			<div className="bg-gray-900 bg-opacity-70 flex items-center h-full">
				<div className="px-10 max-w-xl">{children}</div>
			</div>
		</div>
	);
};

const TeaserCard: FC<TeaserCardProps> = ({
	backgroundImage,
	title,
	description,
	cta,
}) => {
	const cardStyle: CSSProperties = {
		backgroundImage: backgroundImage
			? `url(${backgroundImage})`
			: undefined,
	};

	return (
		<TeaserCardWrapper style={cardStyle}>
			<Heading level="h2" className="text-white">
				{title?.toLocaleUpperCase()}
			</Heading>
			<Text tagType="p" className="mt-2 text-gray-200">
				{description}
			</Text>
			<Button className="mt-4" {...cta} />
		</TeaserCardWrapper>
	);
};

const TeaserCardSkeleton: FC<SkeletonProps & {repeat?: number}> = ({
	repeat = 1,
}) => {
	const skeletons = Array.from({length: repeat}, (_, index) => (
		<TeaserCardWrapper key={index}>
			<Skeleton width={150} className='heading-h2' />
			<Skeleton width={300} count={1.7} className='mt-2' />
			<Skeleton width={150} height={36} className='mt-4' />
		</TeaserCardWrapper>
	));
	return <>{skeletons}</>;
};

export {TeaserCardSkeleton};
export default TeaserCard;
