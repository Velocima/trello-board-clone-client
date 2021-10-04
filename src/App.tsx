import './assets/styles/global.css';
import { Switch, Route } from 'react-router-dom';

export default () => {
	return (
		<Switch>
			<Route path="/" exact>
				<h1>Hello Trello!</h1>
			</Route>
		</Switch>
	);
};
