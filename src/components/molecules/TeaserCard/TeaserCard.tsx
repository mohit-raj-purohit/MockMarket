import {FC} from 'react';
import {Button, Heading, Text} from '../../atoms';
import {TeaserCardSkeleton} from './TeaserCardSkeleton';
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

	if (isLoading) {
		return <TeaserCardSkeleton />;
	}

	return (
		<div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={cardStyle}>
			<div className="bg-gray-900 bg-opacity-70 flex items-center h-full">
				<div className="px-10 max-w-xl">
					<Heading level="h2" className="text-white">
						{title?.toLocaleUpperCase()}
					</Heading>
					<Text tagType="p" className="mt-2 text-gray-200">
						{description}
					</Text>
					<Button className="mt-4" {...cta} />
				</div>
			</div>
		</div>
	);
};

export default TeaserCard;
