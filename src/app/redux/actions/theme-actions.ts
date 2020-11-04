import { getGlobalTheme, setGlobalTheme, Theme } from 'lib';
import { ReduxAction } from '../root-reducer';

export type ThemeActionTypes = 'THEME_STATE_SET';

const setTheme = (theme: Theme): ReduxAction => {
    setGlobalTheme(theme);
    return {
        type: 'SIDEBAR_STATE_SET_OPENED',
        payload: { theme },
        force: true,
    };
};

const ThemeActions = { setTheme };

export default ThemeActions;
