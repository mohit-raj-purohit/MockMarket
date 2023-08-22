import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import {Provider} from 'react-redux';
import store from './redux/store/store.ts';
import {SkeletonTheme} from 'react-loading-skeleton';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<SkeletonTheme baseColor="#adaeae" highlightColor="#8b8f8f">
				<App />
			</SkeletonTheme>
		</Provider>
	</React.StrictMode>
);
