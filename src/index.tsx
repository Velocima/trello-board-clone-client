import App from './App';
import { render } from 'react-dom';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>,
	document.getElementById('root')
);
