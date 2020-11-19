import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Main } from './app-style';
import Sidebar from './components/sidebar';
import useSidebarController from './hooks/sidebar-controller';
import ButtonsPage from './pages/buttons';
import HomePage from './pages/home';
import IconsPage from './pages/icons';
import InputsPage from './pages/inputs';
import ModalsPage from './pages/modals';
import SelectsPage from './pages/selects';
import SlidersPage from './pages/sliders';
import { RouterPaths } from './utils/constants';

const App = (): JSX.Element => {
    const sidebarController = useSidebarController();

    return (
        <HashRouter basename="/">
            <Sidebar />
            <Main sidebarState={sidebarController.state}>
                <Switch>
                    <Route component={HomePage} path={RouterPaths.Home.path} exact />
                    <Route component={IconsPage} path={RouterPaths.Icons.path} />
                    <Route component={ButtonsPage} path={RouterPaths.Buttons.path} />
                    <Route component={InputsPage} path={RouterPaths.Inputs.path} />
                    <Route component={SlidersPage} path={RouterPaths.Sliders.path} />
                    <Route component={SelectsPage} path={RouterPaths.Selects.path} />
                    <Route component={ModalsPage} path={RouterPaths.Modals.path} />
                </Switch>
            </Main>
        </HashRouter>
    );
};

export default App;
