import React from 'react';
import BasicLayout from './layouts/BasicLayout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './config/router.config';
import styles from './App.less';

const App = () => (
	<BasicLayout>
		<Router>
			{routes.map((r, i) => <Route exact path={r.path} component={r.component} /> )}
		</Router>
	</BasicLayout>
);

export default App;