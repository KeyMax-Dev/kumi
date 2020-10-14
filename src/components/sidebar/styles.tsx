import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarElement = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 250px;

    background-color: #fff;
    border-right: 1px solid #1eca57;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`;

export const SidebarLinkElement = styled(NavLink)`
    padding: 10px;

    &.kumi-sidebar-link-active {
        padding-left: 30px;
        color: #1eca57;
    }
`;
