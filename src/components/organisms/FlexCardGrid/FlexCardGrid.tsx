import React, {ReactNode} from 'react';

interface FlexCardGridProps {
	variation: 'full' | '50-50';
	children1: ReactNode;
	children2?: ReactNode;
	className?: string;
}

const FlexCardGrid: React.FC<FlexCardGridProps> = ({
	variation,
	children1,
	children2,
	className,
}) => {
	if (variation === 'full') {
		return <div className={className}>{children1}</div>;
	}
	return (
		<div className={`md:flex ${className}`}>
			<div className="md:w-1/2 md:pr-4">{children1}</div>
			<div className="mt-8 md:mt-0 md:w-1/2 md:pl-4">{children2}</div>
		</div>
	);
};

export default FlexCardGrid;
