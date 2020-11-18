import { motion } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import { createClassName, getColorOrDefault } from 'lib/src/utils';
import styled from 'styled-components';

export const FormFieldContainer = styled(motion.div)<ThemedComponentProps>`
    position: relative;
    min-width: 300px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    transition: all ${({ theme }) => theme.transitions.fast};

    .${createClassName(['icon'])} {
        margin: 5px 0;

        path {
            transition: all ${({ theme }) => theme.transitions.fast};
            fill: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
        }
    }

    &:focus-within {
        .${createClassName(['icon'])} {
            margin: 5px 0;

            path {
                fill: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
            }
        }
    }
`;

export const DownlineFormFieldContainer = styled(FormFieldContainer)`
    background-color: transparent;
    border-bottom: 1px solid ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    &:focus-within {
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
        border-bottom: 2px solid ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
    }
`;

export const OutlineFormFieldContainer = styled(FormFieldContainer)`
    padding: 0 5px;
    background-color: transparent;
    border: 1px solid ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};

    &:focus-within {
        border: 2px solid ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};

        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};

        ::placeholder {
            color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
        }
    }
`;

export const SolidFormFieldContainer = styled(FormFieldContainer)`
    padding: 0 5px;
    background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.15)};

    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};

    &:focus-within {
        background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};

        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};

        ::placeholder {
            color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
        }
    }
`;
