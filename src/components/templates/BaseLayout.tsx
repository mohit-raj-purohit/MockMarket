import React from 'react';
import {Outlet} from 'react-router-dom';
import {usePreferredColorScheme} from '../../utils';
import { Footer, Header } from '../organisms';

const BaseLayoutTemplate: React.FC = () => {
	const preferredColorScheme = usePreferredColorScheme();

	return (
		<div className={`main-wrapper flex flex-col min-h-screen justify-between ${preferredColorScheme}`}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default BaseLayoutTemplate;
