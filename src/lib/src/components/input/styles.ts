import { motion } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import { createClassName, getColorOrDefault } from 'lib/src/utils';
import styled from 'styled-components';
import { FormContainer } from '../form-container';

const InputContainer = styled(FormContainer)<ThemedComponentProps>`
    position: relative;
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

export const DownlineInputContainer = styled(InputContainer)`
    background-color: transparent;
    border-bottom: 1px solid ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    &:focus-within {
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
        border-bottom: 2px solid ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
    }
`;

export const OutlineInputContainer = styled(InputContainer)`
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

export const SolidInputContainer = styled(InputContainer)`
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

export const InputLabelElement = styled.label`
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 3px;
    left: 0;
    right: 0;
    font-size: 0.8rem;
    font-family: ${({ theme }) => theme.font.input.fontFamily};
`;
