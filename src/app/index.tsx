import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { Provider, useSelector } from 'react-redux';
import { RootStore } from './redux';
import { ThemeProvider } from 'styled-components';
import { getGlobalTheme, GlobalStyle, Theme } from 'lib';
import { ReduxState } from './redux/root-state';

const ThemedApp = (): JSX.Element => {
    const theme = useSelector<ReduxState, Theme>(state => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
        </ThemeProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={RootStore}>
            <ThemedApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
