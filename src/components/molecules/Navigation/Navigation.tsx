import React from 'react';
import {Link} from 'react-router-dom';

interface NavItem {
	name: string;
	path: string;
}

interface NavigationProps {
	showMobileNav: boolean;
	navigation: Array<NavItem>;
	className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
	showMobileNav,
	navigation,
	className,
}) => {
	return (
		<nav
			className={`main-navigation ${className || ''} ${
				!showMobileNav && 'hidden'
			} md:flex absolute  w-full left-0 top-full border-b  md:static md:ml-10 md:w-auto md:border-b-0`}
		>
			<ul
				className={`flex-row md:flex w-full md:w-auto py-3 ${
					(className && `${className}-list`) || ''
				}`}
			>
				{navigation.map(({name, path}, index) => {
					return (
						<li
							key={index}
							className={`w-full md:w-auto ${
								(className && `${className}-list-item`) || ''
							}`}
						>
							<Link
								to={path}
								className={`block py-2 px-5 md:px-3 ${
									(className &&
										`${className}-list-item-link`) ||
									''
								}`}
							>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
