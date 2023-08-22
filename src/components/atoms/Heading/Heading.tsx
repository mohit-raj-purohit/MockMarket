import React, {ReactNode} from 'react';
import './Heading.css';
interface HeadingProps {
	level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
	children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
	children,
	level,
	className,
	...rest
}) => {
	const HeadingTag = level;
	const headingClass = `heading-${HeadingTag}`;

	return (
		<HeadingTag className={`${headingClass} ${className || ''}`} {...rest}>
			{children}
		</HeadingTag>
	);
};

export default Heading;
