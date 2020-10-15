import styled from 'styled-components';
import SidebarState from './types/sidebar-state';

interface MainProps {
    sidebarState: SidebarState;
}

export const Main = styled.main<MainProps>`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${({ sidebarState: { opened } }) => (opened ? 'calc(100% - 250px)' : '100%')};

    margin-left: ${({ sidebarState: { opened } }) => (opened ? '250px' : '0')};
`;
