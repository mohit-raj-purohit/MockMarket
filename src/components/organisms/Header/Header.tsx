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
	return (
		<header className="header bg-white border-b border-gray-200 sticky top-0 z-10">
			<Container className="flex justify-between">
				<Logo linkAriaLabel="Go to Homepage" logoAlt="Vendora Logo" />
				<Navigation
					navigation={MAIN_NAVIGATION}
					showMobileNav={showMobileNav}
				/>
				<Button variation='icon' color='text-black' type="button" className="ml-auto mr-3 items-center justify-center">
					<CiSearch size={25} />
				</Button>
				<Button variation='icon' color='text-black' type="button" className="mr-3 md:mr-0 items-center justify-center">
					<CiShoppingCart size={25} />
				</Button>
				<Button variation='icon' color='text-black' type="button" onClick={toggleNav} className="md:hidden items-center justify-end">
					<CiMenuBurger size={25} />
				</Button>
			</Container>
		</header>
	);
};

export default Header;
