import React from 'react';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import viteLogoDark from '../../../assets/logo-dark.png';
import './index.css';
import { Link } from 'react-router-dom';
import { HOME_PAGE_PATH } from '../../../constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItem } from '../../../redux/slices/CartSlice';
// import {AppState} from '../../../redux/store/store';
// import { clearCart } from '../../../redux/actions';

const Header: React.FC = () => {
	// const dispatch = useDispatch();
	// const data = useSelector((state: AppState) => {
	// 	return state.cart;
	// });
	// const handleHamburgerClick = () => {
	// 	dispatch(addItem({id: 1}));
	// }
	// const handleEmptyCart = () => {
	// 	dispatch(clearCart());
	// }
	return (
		<header className={`header bg-white border-b border-gray-200 sticky top-0 dark:bg-slate-800`} >
			<div className="v-container mx-auto flex justify-between py-3">
				<Link to={HOME_PAGE_PATH} className='flex items-center justify-center'>
					<img src={viteLogoDark} className="w-28 block" alt="logo" />
				</Link>
				<button type='button' className='ml-auto mr-3'>
					<CiSearch size={25} />
				</button>
				<button type='button'>
					<CiShoppingCart size={25} />
				</button>
			</div>
		</header>
	);
};

export default Header;
