import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarElement = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 250px;

    border-right: 1px solid ${({ theme }) => theme.colors.primary.principal};

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`;

export const SidebarLinkElement = styled(NavLink)`
    padding: 10px;
    color: ${({ theme }) => theme.colors.secondary.principal};

    &.kumi-sidebar-link-active {
        padding-left: 30px;
        color: ${({ theme }) => theme.colors.primary.principal};
    }
`;

export const SidebarNavElement = styled.nav`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: auto;
`;

export const SidebarThemeTogglerContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
`;
