import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {
	CATEGORIES_PAGE_PATH,
	CONTACT_PAGE_PATH,
	HOME_PAGE_PATH,
	PAGE_NOT_FOUND_PATH,
	PRODUCTS_PAGE_PATH,
	PRODUCT_PAGE_PATH,
} from '../constants';
import {
	BaseLayout,
	Categories,
	Contact,
	Home,
	PageNotFound,
	Products,
} from '../components';
import { Product } from '../components/pages/Product';

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
		{path: `${PRODUCT_PAGE_PATH}/:productId`, element: <Product />},
		{path: PAGE_NOT_FOUND_PATH, element: <PageNotFound />},
	];

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<BaseLayout />}>
					{routes.map((route, index) => (
						<Route
							key={index}
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
