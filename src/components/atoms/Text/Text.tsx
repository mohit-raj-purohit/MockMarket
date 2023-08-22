import React, {ReactNode} from 'react';
import './Text.css';
interface TextProps {
	tagType: 'p' | 'span';
	className?: string;
	children: ReactNode;
}

const Text: React.FC<TextProps> = ({children, tagType, className, ...rest}) => {
	const TextTag = tagType;

	return (
		<TextTag className={`tracking-wide ${className || ''}`} {...rest}>
			{children}
		</TextTag>
	);
};

export default Text;
