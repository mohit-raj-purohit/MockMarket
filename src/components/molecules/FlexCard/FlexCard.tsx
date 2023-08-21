import React, {FC, ReactNode} from 'react';
import {Button} from '../../atoms';
import {ButtonComponentProps} from '../../atoms/Button/Button';

interface FlexCardProps {
	backgroundImage?: string;
	title?: string;
	description?: string;
	cta?: ButtonComponentProps;
}

const FlexCard: FC<FlexCardProps> = ({
	backgroundImage,
	title,
	description,
	cta,
}) => {
	const cardStyle: React.CSSProperties = {
		backgroundImage: backgroundImage
			? `url(${backgroundImage})`
			: undefined,
	};

	return (
		<div
			className="h-64 rounded-md overflow-hidden bg-cover bg-center"
			style={cardStyle}
		>
			<div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
				<div className="px-10 max-w-xl">
					<h2 className="text-2xl text-white font-semibold">
						{title}
					</h2>
					<p className="mt-2 text-gray-200">{description}</p>
					<Button className="mt-4" {...cta} />
				</div>
			</div>
		</div>
	);
};

export default FlexCard;
