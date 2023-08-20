import React from 'react';
import {Link} from 'react-router-dom';
import logoDark from '../../../assets/logo-dark.png';
import {HOME_PAGE_PATH} from '../../../constants';
import {Image} from '../../atoms';

interface LogoProps {
	className?: string;
	logoAlt?: string;
	linkAriaLabel?: string;
}

const Logo: React.FC<LogoProps> = ({className, linkAriaLabel, logoAlt}) => {
	return (
		<Link
			to={HOME_PAGE_PATH}
			aria-label={linkAriaLabel}
			className={`flex items-center justify-center ${className || ''}`}
		>
			<Image src={logoDark} alt={logoAlt} className="w-28" />
		</Link>
	);
};

export default Logo;
