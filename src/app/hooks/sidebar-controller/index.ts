import { useDispatch, useSelector } from 'react-redux';
import SidebarStateActions from 'app/redux/actions/sidebar-state-actions';
import { ReduxState } from 'app/redux/root-state';
import SidebarState from 'app/types/sidebar-state';

interface SidebarController {
    state: SidebarState;
    open: () => void;
    close: () => void;
}

const useSidebarController = (): SidebarController => {
    const state = useSelector<ReduxState, SidebarState>(state => state.sidebarState as SidebarState);

    const dispatch = useDispatch();

    const open = (): void => {
        if (state.opened) return;
        dispatch(SidebarStateActions.setOpened(true));
    };

    const close = (): void => {
        if (!state.opened) return;
        dispatch(SidebarStateActions.setOpened(false));
    };

    return {
        state,
        open,
        close,
    };
};

export default useSidebarController;
