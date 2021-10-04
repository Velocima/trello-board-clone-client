import './assets/styles/global.css';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

export default () => {
	return (
		<Switch>
			<Route path="/" exact>
				<Pages.Landing />
			</Route>
			<Route path="/boards" exact>
				<Pages.Dashboard />
			</Route>
			<Route path="/boards/:boardId" exact>
				<Pages.Board />
			</Route>
			<Route path="/profile" exact>
				<Pages.Profile />
			</Route>
			<Route path="/">
				<Pages.NotFound />
			</Route>
		</Switch>
	);
};
