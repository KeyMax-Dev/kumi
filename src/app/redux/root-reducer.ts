import { Action, Reducer } from 'redux';
import { SidebarStateActionTypes } from './actions/sidebar-state-actions';
import { ThemeActionTypes } from './actions/theme-actions';
import { ReduxState, InitialState } from './root-state';

type ReduxActions = SidebarStateActionTypes | ThemeActionTypes;

export interface ReduxAction extends Action<ReduxActions> {
    payload: Partial<ReduxState>;
    force?: boolean;
}

const mergeState = (before: any, after: any, force = false): any => {
    if (typeof after !== 'object' || typeof before !== 'object') return after;
    if (Array.isArray(after)) return [...after];

    if (force) {
        for (const obj in after) before[obj] = after[obj];
    } else {
        for (const obj in after) before[obj] = mergeState(before[obj], after[obj]);
    }

    return Array.isArray(before) ? before : { ...before };
};

export const rootReducer: Reducer<ReduxState, ReduxAction> = (state = InitialState, action) => {
    if (!action.payload) {
        return state;
    } else {
        return mergeState(state, action.payload, action.force);
    }
};
