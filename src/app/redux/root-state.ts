import SidebarState from 'app/types/sidebar-state';
import { getGlobalTheme, Theme } from 'lib';

export interface ReduxState {
    sidebarState: Partial<SidebarState>;
    theme: Theme;
}

export const InitialState: ReduxState = {
    sidebarState: {
        opened: true,
    },
    theme: getGlobalTheme(),
};
