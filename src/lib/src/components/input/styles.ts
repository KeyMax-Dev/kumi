import { motion } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import { getColorOrDefault } from 'lib/src/utils';
import styled from 'styled-components';

export const InputElement = styled(motion.input)<ThemedComponentProps>`
    transition: all ${({ theme }) => theme.transitions.fast};
    background-color: transparent;
    flex: 1;
    height: 100%;
    padding: 10px 5px 0 5px;

    outline: none;

    font-family: ${({ theme }) => theme.font.input.fontFamily};
    font-size: ${({ theme }) => theme.font.input.fontSize};
    color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};

    &:focus {
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
    }

    &::placeholder {
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    }
`;
