import SidebarState from 'app/types/sidebar-state';

export interface ReduxState {
    sidebarState: Partial<SidebarState>;
}

export const InitialState: ReduxState = {
    sidebarState: {
        opened: true,
    },
};
