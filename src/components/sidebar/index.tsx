import React from 'react';
import { RouterPaths } from '../../utils/constants';
import SidebarLink from './sidebar-link';
import { SidebarElement } from './styles';

const Sidebar = (): JSX.Element => {
    return (
        <SidebarElement>
            {Object.values(RouterPaths).map(routerPath => (
                <SidebarLink routerPath={routerPath} />
            ))}
        </SidebarElement>
    );
};

export default Sidebar;
