import React, {useState} from 'react';
import {CiMenuBurger, CiSearch, CiShoppingCart} from 'react-icons/ci';
import {Link} from 'react-router-dom';
import {HOME_PAGE_PATH} from '../../../constants';
import {MAIN_NAVIGATION} from '../../../services/navigation.service';
import viteLogoDark from '../../../assets/logo-dark.png';
import './index.css';

const Header: React.FC = () => {
	const [isNavVisible, setIsNavVisible] = useState(false);
	const toggleNav = () => {
		setIsNavVisible((prevState) => !prevState);
	};
	const hideNav = () => {
		setTimeout(() => {
			setIsNavVisible(false);
		}, 300);
	};
	return (
		<header className="header bg-white border-b border-gray-200 sticky top-0 z-10">
			<div className="v-container mx-auto flex justify-between py-3">
				<Link
					to={HOME_PAGE_PATH}
					className="flex items-center justify-center"
				>
					<img src={viteLogoDark} className="w-28 block" alt="logo" />
				</Link>
				{MAIN_NAVIGATION.length && (
					<nav
						className={`main-navigation ${
							!isNavVisible && 'hidden'
						} md:flex absolute bg-white w-full left-0 top-full border-b border-gray-200 md:static md:ml-10 md:w-auto md:border-b-0`}
					>
						<div className="flex flex-wrap items-center justify-between mx-auto">
							<ul className="flex-row md:flex w-full md:w-auto py-3">
								{MAIN_NAVIGATION.map(({name, path}, index) => {
									return (
										<li key={index} className="w-full md:w-auto">
											<Link
												to={path}
												className="block py-2 px-5 md:px-3"
											>
												{name}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</nav>
				)}

				<button type="button" className="ml-auto mr-3">
					<CiSearch size={25} />
				</button>
				<button type="button" className="mr-3 md:mr-0">
					<CiShoppingCart size={25} />
				</button>
				<button type="button" className="md:hidden" onClick={toggleNav} onBlur={hideNav}>
					<CiMenuBurger size={25} />
				</button>
			</div>
		</header>
	);
};

export default Header;
