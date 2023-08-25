import {FC} from 'react';
import {Heading, Text} from '../../atoms';
import {TeaserCardSkeleton} from './TeaserCardSkeleton';
import {TeaserCardProps} from './types/interface';
import {createStyle, CSSProperties} from '../../../utils';
import {Link} from 'react-router-dom';
import {CATEGORY_PAGE_PATH} from '../../../constants';

const TeaserCard: FC<TeaserCardProps> = ({
	backgroundImage,
	title,
	description,
	cta,
	isLoading,
	id = '',
}) => {
	const styles: CSSProperties[] = [
		{backgroundImage: `url(${backgroundImage})`},
	];
	const cardStyle = createStyle(styles);
	console.log(isLoading, id);
	if (isLoading) {
		return <TeaserCardSkeleton />;
	}

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
					<Link
						className={`mt-4 v-btn text-sm flex tracking-wide w-fit ${cta?.variation} ${cta?.color} ${cta?.className}`}
						to={`${CATEGORY_PAGE_PATH}/${id}`}
					>
						{cta?.buttonLabel}
						{cta?.arrow && (
							<svg
								className="h-5 w-5 ml-2"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						)}
					</Link>
					{/* <Button className="mt-4" {...cta} /> */}
				</div>
			</div>
		</div>
	);
};

export default TeaserCard;
