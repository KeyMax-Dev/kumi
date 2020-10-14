import { createStore } from 'redux';
import { ReduxAction, rootReducer } from './root-reducer';
import { ReduxState } from './root-state';

export const RootStore = createStore<ReduxState, ReduxAction, null, null>(
    rootReducer
);
