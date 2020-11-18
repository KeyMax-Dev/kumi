import { motion } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import { getColorOrDefault } from 'lib/src/utils';
import styled from 'styled-components';

export const SelectContainer = styled.div``;

export const SelectOptionsContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
`;

export const SelectListContainer = styled(motion.div)<ThemedComponentProps>`
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

export const SelectListElement = styled.div<ThemedComponentProps>`
    padding: 5px;
    width: 100%;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    }
`;
