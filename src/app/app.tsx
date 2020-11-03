import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from './app-style';
import Sidebar from './components/sidebar';
import useSidebarController from './hooks/sidebar-controller';
import ButtonsPage from './pages/buttons';
import HomePage from './pages/home';
import IconsPage from './pages/icons';
import InputsPage from './pages/inputs';
import { RouterPaths } from './utils/constants';

const App = (): JSX.Element => {
    const sidebarController = useSidebarController();

    return (
        <Router basename="/kumi/">
            <Sidebar />
            <Main sidebarState={sidebarController.state}>
                <Switch>
                    <Route component={HomePage} path={RouterPaths.Home.path} exact />
                    <Route component={IconsPage} path={RouterPaths.Icons.path} />
                    <Route component={ButtonsPage} path={RouterPaths.Buttons.path} />
                    <Route component={InputsPage} path={RouterPaths.Inputs.path} />
                </Switch>
            </Main>
        </Router>
    );
};

export default App;
