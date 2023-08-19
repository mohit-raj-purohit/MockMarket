import { Link } from 'react-router-dom';
import PageNotFoundImage from '../../assets/404.jpg';
import { HOME_PAGE_PATH } from '../../constants';
const PageNotFound = () => {
	return (
		<div className="v-container flex flex-col md:flex-row items-center h-auto mx-auto mt-0 md:mt-auto">
			<div className='w-full md:w-1/2 gap-3 pt-9 pb-7 md:py-0'>
				<p className="text-lg font-medium text-orange-600">
					Oops...
				</p>
				<h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
					We can't find that page
				</h1>
				<p className="mt-4 text-gray-500 dark:text-gray-400">
					Sorry, the page you are looking for doesn't exist or has
					been moved.
				</p>
				<div className="flex items-center mt-6 gap-x-3">
					<Link to={HOME_PAGE_PATH} className="px-5 py-2 text-sm tracking-wide transition-colors duration-200 text-white bg-orange-600 hover:bg-orange-500">
						Take me home
					</Link>
				</div>
			</div>
			<div className='w-full md:w-1/2 pt-7 md:py-0'>
				<img src={PageNotFoundImage} className='w-full h-full object-cover aspect-404-image' alt=""/>
			</div>
		</div>
	);
};

export default PageNotFound;
