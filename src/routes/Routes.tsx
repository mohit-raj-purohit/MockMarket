import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Categories, Contact, Home, PageNotFound, Products} from '../components/pages';
import {
	CATEGORIES_PAGE_PATH,
	CONTACT_PAGE_PATH,
	HOME_PAGE_PATH,
	PAGE_NOT_FOUND_PATH,
	PRODUCTS_PAGE_PATH,
} from '../constants';
import {BaseLayout} from '../components/templates';

type AppRoute = {
	path: string;
	element: React.ReactNode;
	protected?: boolean;
};

const AppRoutes: React.FC = () => {
	const routes: AppRoute[] = [
		{path: HOME_PAGE_PATH, element: <Home />},
		{path: CONTACT_PAGE_PATH, element: <Contact />},
		{path: CATEGORIES_PAGE_PATH, element: <Categories />},
		{path: PRODUCTS_PAGE_PATH, element: <Products />},
		{path: PAGE_NOT_FOUND_PATH, element: <PageNotFound />},
	];

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BaseLayout />}>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={route.element}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
