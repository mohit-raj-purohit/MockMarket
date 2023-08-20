import React, {MouseEventHandler, ButtonHTMLAttributes} from 'react';
type ButtonProps = {
	type?: 'button' | 'submit' | 'reset';
	variation?: 'primary' | 'secondary' | 'link' | 'icon';
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children?: React.ReactNode;
	icon?: React.ReactElement;
	classNames?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	type,
	variation,
	onClick,
	children,
	icon,
	classNames,
	...rest
}) => {
	return (
		<button type={type} onClick={onClick} className={classNames} {...rest}>
			{icon || ''}
			{children || ''}
		</button>
	);
};

export default Button;
