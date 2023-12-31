import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode} from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

export type ButtonProps = {
	to?: string;
	external?: boolean;
	className?: string;
	children?: ReactNode;
	variation:
		| 'primary'
		| 'secondary-light'
		| 'secondary-dark'
		| 'link-light'
		| 'link-dark';
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
	to,
	external,
	className,
	variation,
	children,
	...rest
}) => {
	const isLink = to?.length;
	let buttonClasses = `v-btn text-sm flex tracking-wide w-fit ${className}`;
	if (variation === 'primary') {
		buttonClasses += ' primary';
	}
	if (variation === 'secondary-light') {
		buttonClasses += ' secondary light';
	}
	if (variation === 'secondary-dark') {
		buttonClasses += ' secondary dark';
	}
	if (variation === 'link-dark') {
		buttonClasses += ' link dark';
	}
	if (variation === 'link-light') {
		buttonClasses += ' link light';
	}

	if (external) {
		return (
			<a {...rest} href={to} target="_blank" className={buttonClasses}>
				{children}
			</a>
		);
	}

	if (isLink) {
		return (
			<Link {...rest} to={to} className={buttonClasses}>
				{children}
			</Link>
		);
	}

	return <button className={buttonClasses} {...rest}>{children}</button>;
};

export default Button;
