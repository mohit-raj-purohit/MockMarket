import {FC, ReactNode} from 'react';
import {Button, Heading, Text} from '../../atoms';
import {TeaserCardSkeleton} from './TeaserCardSkeleton';
import {Category} from '../../../types/Category';
import {CSSProperties, createStyle, renderChildrenOfType} from '../../../utils';
import {ButtonProps} from '../../atoms/Button/Button';

interface TeaserCardProps extends Category {
	isLoading?: boolean;
	children?: ReactNode;
}
interface ActionProps extends ButtonProps {
	children: ReactNode;
}

const Action: React.FC<ActionProps> = ({children, ...props}) => {
	return (
		<Button className="mt-4" {...props}>
			{children}
		</Button>
	);
};

const TeaserCard: FC<TeaserCardProps> & {Action: React.FC<ActionProps>} = ({
	backgroundImage,
	title,
	description,
	isLoading,
	children,
}) => {
	if (isLoading) {
		return <TeaserCardSkeleton />;
	}

	const styles: CSSProperties[] = [
		{backgroundImage: `url(${backgroundImage})`},
	];
	const cardStyle = createStyle(styles);

	return (
		<div
			className="h-64 rounded-md overflow-hidden bg-cover bg-center"
			style={cardStyle}
		>
			<div className="bg-gray-900 bg-opacity-70 flex items-center h-full">
				<div className="px-10 max-w-xl">
					<Heading level="h2" className="text-white">
						{title?.toLocaleUpperCase()}
					</Heading>
					<Text tagType="p" className="mt-2 text-gray-200">
						{description}
					</Text>
					{children &&
						renderChildrenOfType(children, TeaserCard.Action)}
				</div>
			</div>
		</div>
	);
};

TeaserCard.Action = Action;
export default TeaserCard;
