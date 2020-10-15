import { ReduxAction } from '../root-reducer';

export type SidebarStateActionTypes = 'SIDEBAR_STATE_SET_OPENED';

const setOpened = (opened: boolean): ReduxAction => {
    return {
        type: 'SIDEBAR_STATE_SET_OPENED',
        payload: { sidebarState: { opened } },
    };
};

const SidebarStateActions = { setOpened };

export default SidebarStateActions;
