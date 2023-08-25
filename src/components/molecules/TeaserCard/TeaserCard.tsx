import {FC} from 'react';
import {Button, Heading, Text} from '../../atoms';
import {TeaserCardWrapper} from './_TeaserCardWrapper';
import {TeaserCardSkeleton} from './_TeaserCardSkeleton';
import {TeaserCardProps} from './types/interface';
import {createStyle, CSSProperties} from '../../../utils';
// Teaser card component
const TeaserCard: FC<TeaserCardProps> = ({
	backgroundImage,
	title,
	description,
	cta,
	isLoading,
}) => {
	const styles: CSSProperties[] = [
		{backgroundImage: `url(${backgroundImage})`},
	];
	const cardStyle = createStyle(styles);

	console.log(cardStyle);

	if (isLoading) {
		return <TeaserCardSkeleton />;
	}

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

export default TeaserCard;
