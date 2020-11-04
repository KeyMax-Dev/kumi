import React from 'react';
import { SidebarElement } from './styles';
import SidebarList from './sidebar-list';
import SidebarThemeToggler from './sidebar-theme-toggler';

const Sidebar = (): JSX.Element => {
    return (
        <SidebarElement>
            <SidebarList />
            <SidebarThemeToggler />
        </SidebarElement>
    );
};

export default Sidebar;
