import React, {useState} from 'react';
import {CiMenuBurger, CiSearch, CiShoppingCart} from 'react-icons/ci';
import {MAIN_NAVIGATION} from '../../../services/navigation.service';
import {Logo, Navigation} from '../../molecules';
import {Button} from '../../atoms';
import Container from '../../molecules/Container/Container';

const Header: React.FC = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const toggleNav = () => {
		setShowMobileNav((prevState) => !prevState);
	};
	const hideNav = () => {
		setTimeout(() => {
			setShowMobileNav(false);
		}, 300);
	};
	return (
		<header className="header bg-white border-b border-gray-200 sticky top-0 z-10">
			<Container className='flex justify-between'>
				<Logo linkAriaLabel="Go to Homepage" logoAlt="Vendora Logo" />
				<Navigation
					navigation={MAIN_NAVIGATION}
					showMobileNav={showMobileNav}
				/>
				<Button
					type="button"
					icon={<CiSearch size={25} />}
					className="ml-auto mr-3"
				/>
				<Button
					type="button"
					icon={<CiShoppingCart size={25} />}
					className="mr-3 md:mr-0"
				/>
				<Button
					type="button"
					icon={<CiMenuBurger size={25} />}
					onClick={toggleNav}
					onBlur={hideNav}
					className="md:hidden"
				/>
			</Container>
		</header>
	);
};

export default Header;
