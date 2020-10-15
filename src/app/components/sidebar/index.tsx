import React from 'react';
import { RouterPaths } from 'app/utils/constants';
import SidebarLink from './sidebar-link';
import { SidebarElement } from './styles';

const Sidebar = (): JSX.Element => {
    return (
        <SidebarElement>
            {Object.values(RouterPaths).map(routerPath => (
                <SidebarLink key={routerPath.name} routerPath={routerPath} />
            ))}
        </SidebarElement>
    );
};

export default Sidebar;
