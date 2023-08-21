import React, {HTMLAttributes, ReactNode} from 'react';

type ContainerProps = {
	className?: string;
	children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({
	className,
	children,
	...rest
}) => {
	return (
		<section className={`container px-5 mx-auto py-3 ${className || ''}`} {...rest}>
			{children}
		</section>
	);
};

export default Container;
