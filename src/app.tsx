import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './app-style';
import Sidebar from './components/sidebar';
import useSidebarController from './hooks/sidebar-controller';
import HomePage from './pages/home';
import IconsPage from './pages/icons';
import { RouterPaths } from './utils/constants';

const App = (): JSX.Element => {
    const sidebarController = useSidebarController();

    return (
        <Router>
            <Sidebar />
            <Main sidebarState={sidebarController.state}>
                <Switch>
                    <Route component={HomePage} path={RouterPaths.Home.path} exact />
                    <Route component={IconsPage} path={RouterPaths.Icons.path} />
                </Switch>
            </Main>
        </Router>
    );
};

export default App;
