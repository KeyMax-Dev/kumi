import SidebarState from '../types/sidebar-state';

export interface ReduxState {
    sidebarState: Partial<SidebarState>;
}

export const InitialState: ReduxState = {
    sidebarState: {
        opened: true,
    },
};
