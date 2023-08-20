import React from 'react';
import {Outlet} from 'react-router-dom';
import {Footer, Header} from '../molecules';
import {usePreferredColorScheme} from '../../utils';

const BaseLayoutTemplate: React.FC = () => {
	const preferredColorScheme = usePreferredColorScheme();

	return (
		<div className={`main-wrapper ${preferredColorScheme}`}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default BaseLayoutTemplate;
