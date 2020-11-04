import { RouterPaths } from 'app/utils/constants';
import React from 'react';
import SidebarLink from './sidebar-link';
import { SidebarNavElement } from './styles';

const SidebarList = (): JSX.Element => {
    return (
        <SidebarNavElement>
            {Object.values(RouterPaths).map(routerPath => (
                <SidebarLink key={routerPath.name} routerPath={routerPath} />
            ))}
        </SidebarNavElement>
    );
};

export default SidebarList;
