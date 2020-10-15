import React from 'react';
import RouterPath from 'app/types/router-path';
import { SidebarLinkElement } from './styles';

interface SidebarLinkProps {
    routerPath: RouterPath;
}

const SidebarLink = ({ routerPath }: SidebarLinkProps): JSX.Element => {
    return (
        <SidebarLinkElement
            exact={routerPath.path === '/'}
            to={routerPath.path}
            activeClassName="kumi-sidebar-link-active"
        >
            {routerPath.name}
        </SidebarLinkElement>
    );
};

export default SidebarLink;
