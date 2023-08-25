import React, {ReactNode, Children, cloneElement} from 'react';

interface FlexCardGridProps {
	variation: 'full' | '50-50';
	children: ReactNode;
	className?: string;
}

const calculateContainerClasses = (
	variation: 'full' | '50-50',
	index: number
): string => {
	if (variation === 'full') {
		return 'w-full';
	}

	if (index === 0) {
		return 'md:w-1/2 md:pr-4';
	} else if (index === 1) {
		return 'mt-8 md:mt-0 md:w-1/2 md:pl-4';
	}

	return '';
};

const FlexCardGrid: React.FC<FlexCardGridProps> = ({
	variation,
	children,
	className,
}) => {
	if (Children.count(children) > 2) {
		console.error('FlexCardGrid requires exactly 2 children.');
		return '';
	}
	return (
		<div className={`md:flex ${variation} ${className || ''}`}>
			{Children.map(children, (child, index) => (
				<div className={calculateContainerClasses(variation, index)}>
					{cloneElement(child as React.ReactElement)}
				</div>
			))}
		</div>
	);
};

export default FlexCardGrid;
