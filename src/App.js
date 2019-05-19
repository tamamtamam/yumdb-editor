import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from './config/router.config';

const App = () => (
    <Router>
        {routes.map((r, i) => <Route exact path={r.path} component={r.component}/>)}
    </Router>
    //<FooterView />
);

export default App;