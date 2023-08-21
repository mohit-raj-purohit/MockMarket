import React, {
	MouseEventHandler,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
	ReactNode,
} from 'react';

import './Button.css';

type CommonProps = {
	variation: 'primary' | 'secondary' | 'link' | 'icon';
	color?: 'text-white' | 'text-black';
	className?: string;
	buttonLabel?: string;
	arrow?: boolean;
};
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonComponentProps = {
	type?: 'button' | 'link';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
} & (ButtonProps | LinkProps);

const Button: React.FC<ButtonComponentProps> = ({
	type = '',
	variation = '',
	color = '',
	className = '',
	onClick,
	children,
	buttonLabel,
	arrow,
}) => {
	const buttonClasses = `v-btn text-sm flex tracking-wide w-fit ${variation} ${color} ${className}`;

	if (type === 'button') {
		return (
			<button
				className={buttonClasses}
				onClick={onClick as MouseEventHandler<HTMLButtonElement>}
			>
				{children || buttonLabel}
				{arrow && (
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
			</button>
		);
	} else {
		return (
			<a
				href="#"
				className={buttonClasses}
				onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
			>
				{children || buttonLabel}
				{arrow && (
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
			</a>
		);
	}
};

export default Button;
