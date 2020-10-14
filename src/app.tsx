import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './app-style';
import Sidebar from './components/sidebar';
import useSidebarController from './hooks/sidebar-controller';
import HomePage from './pages/home';

const App = (): JSX.Element => {
    const sidebarController = useSidebarController();

    return (
        <Router>
            <Sidebar />
            <Main sidebarState={sidebarController.state}>
                <Switch>
                    <Route component={HomePage} />
                </Switch>
            </Main>
        </Router>
    );
};

export default App;
