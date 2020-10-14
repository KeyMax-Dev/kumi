import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import HomePage from './pages/home';

const App = (): JSX.Element => {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route component={HomePage} />
            </Switch>
        </Router>
    );
};

export default App;
