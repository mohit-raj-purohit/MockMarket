import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home, PageNotFound} from '../pages';

type AppRoute = {
	path: string;
	element: React.ReactNode;
	protected?: boolean;
};

const AppRoutes: React.FC = () => {
	const routes: AppRoute[] = [
		{path: '/', element: <Home />},
		{path: '*', element: <PageNotFound />},
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
