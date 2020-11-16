import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SelectContainer = styled.div``;

export const SelectOptionsContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
`;

export const SelectListContainer = styled(motion.div)`
    width: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;

    background-color: ${({ theme }) => theme.colors.primary.contrast};
    box-shadow: ${({ theme }) => theme.boxShadow.active};
`;

export const SelectListElement = styled.div`
    padding: 5px;
    width: 100%;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary.principal}32;
    }
`;
