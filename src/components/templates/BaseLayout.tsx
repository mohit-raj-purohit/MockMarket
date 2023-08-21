import React from 'react';
import {Outlet} from 'react-router-dom';
import {usePreferredColorScheme} from '../../utils';
import {Footer, Header} from '../organisms';

const BaseLayoutTemplate: React.FC = () => {
	const preferredColorScheme = usePreferredColorScheme();

	return (
		<div
			className={`main-wrapper flex flex-col min-h-screen justify-between ${preferredColorScheme}`}
		>
			<Header />
			<div className="py-6 md:py-10">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default BaseLayoutTemplate;
