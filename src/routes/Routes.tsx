import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home, PageNotFound} from '../pages';
import {HOME_PAGE_PATH, PAGE_NOT_FOUND_PATH} from '../constants';

type AppRoute = {
	path: string;
	element: React.ReactNode;
	protected?: boolean;
};

const AppRoutes: React.FC = () => {
	const routes: AppRoute[] = [
		{path: HOME_PAGE_PATH, element: <Home />},
		{path: PAGE_NOT_FOUND_PATH, element: <PageNotFound />},
	];

	return (
		<Routes>
			{routes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.element}
				/>
			))}
		</Routes>
	);
};

export default AppRoutes;
