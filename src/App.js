import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Browse, Home, LoginHelp, NotFound, SignIn, SignUp } from './pages';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.HOME}>
					<Home />
				</Route>
				<Route exact path={ROUTES.SIGN_IN}>
					<SignIn />
				</Route>
				<Route exact path={ROUTES.SIGN_UP}>
					<SignUp />
				</Route>
				<Route exact path={ROUTES.BROWSE}>
					<Browse />
				</Route>
				<Route exact path={ROUTES.LOGIN_HELP}>
					<LoginHelp />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
