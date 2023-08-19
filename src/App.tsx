import {BrowserRouter} from 'react-router-dom';
import {Routes} from './routes';
import {usePreferredColorScheme} from './utils';
import {Footer, Header} from './components/molecules';

function App() {
	const preferredColorScheme = usePreferredColorScheme();
	return (
		<>
			<div className={`main-wrapper ${preferredColorScheme}`}>
				<Header />
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
				<Footer />
			</div>
		</>
	);
}

export default App;
