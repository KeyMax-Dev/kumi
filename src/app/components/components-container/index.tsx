import styled from 'styled-components';

export const ComponentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    padding: 15px;
    margin: 15px 0;
    border: 1px solid ${({ theme }) => theme.colors.primary.principal};
    border-radius: ${({ theme }) => theme.borderRadius};
`;
