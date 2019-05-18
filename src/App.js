import React from 'react';
import FooterView from "./components/UIFooter/example/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './config/router.config';
import styles from './App.less';

console.log('styles --> ', styles);

const App = () => (
	<Router>
		{routes.map((r, i) => <Route exact path={r.path} component={r.component} /> )}
	</Router>
    //<FooterView />
);

export default App;