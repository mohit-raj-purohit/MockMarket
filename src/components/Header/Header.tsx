import React from 'react';
import viteLogoLight from '../../assets/logo-dark.png';
import viteLogoDark from '../../assets/logo-light.png';
import './index.css';
import {usePreferredColorScheme} from '../../utils';
import { AiOutlineMenu } from "react-icons/ai";
const Header: React.FC = () => {
	const preferredColorScheme = usePreferredColorScheme();
	let logo = viteLogoLight;
	if (preferredColorScheme === 'dark') {
		logo = viteLogoDark;
	}
	return (
		<header
			className={`header ${preferredColorScheme} bg-white dark:bg-slate-800`}
		>
			<div className="container mx-auto">
				<a href="#">
					<img src={logo} className="w-28" alt="logo" />
				</a>
				<AiOutlineMenu size={25}/>
			</div>
		</header>
	);
};

export default Header;
