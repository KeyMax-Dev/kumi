import { motion } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import { createClassName } from 'lib/src/utils';
import styled from 'styled-components';

const InputContainer = styled(motion.div)<ThemedComponentProps>`
    min-width: 300px;
    height: 50px;
    margin: 5px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    transition: all ${({ theme }) => theme.transitions.fast};

    .${createClassName(['icon'])} {
        margin: 5px 0;

        path {
            transition: all ${({ theme }) => theme.transitions.fast};
            fill: ${({ theme, color, invert }): string =>
                theme.colors[color || 'secondary'][invert ? 'contrast' : 'principal']}4c;
        }
    }

    &:focus-within {
        .${createClassName(['icon'])} {
            margin: 5px 0;

            path {
                fill: ${({ theme, color, invert }): string =>
                    theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};
            }
        }
    }
`;

export const DownlineInputContainer = styled(InputContainer)`
    background-color: transparent;
    border-bottom: 1px solid
        ${({ theme, color, invert }): string => theme.colors[color || 'secondary'][invert ? 'contrast' : 'principal']}4c;
    color: ${({ theme, color, invert }): string =>
        theme.colors[color || 'secondary'][invert ? 'contrast' : 'principal']}4c;
    &:focus-within {
        color: ${({ theme, color, invert }): string =>
            theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};
        border-bottom: 2px solid
            ${({ theme, color, invert }): string => theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};
    }
`;

export const OutlineInputContainer = styled(InputContainer)`
    padding: 0 5px;
    background-color: transparent;
    border: 1px solid
        ${({ theme, color, invert }): string => theme.colors[color || 'secondary'][invert ? 'contrast' : 'principal']}4c;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme, color, invert }): string =>
        theme.colors[color || 'secondary'][invert ? 'contrast' : 'principal']}4c;

    &:focus-within {
        border: 2px solid
            ${({ theme, color, invert }): string => theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};

        color: ${({ theme, color, invert }): string =>
            theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};

        ::placeholder {
            color: ${({ theme, invert }) => theme.colors.primary[invert ? 'contrast' : 'principal']}4c;
        }
    }
`;

export const SolidInputContainer = styled(InputContainer)`
    padding: 0 5px;
    background-color: ${({ theme, color, invert }): string =>
        theme.colors[color || 'secondary'][invert ? 'contrast' : 'principal']}26;

    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme, color, invert }): string =>
        theme.colors[color || 'secondary'][invert ? 'contrast' : 'principal']}4c;

    &:focus-within {
        background-color: ${({ theme, color, invert }): string =>
            theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']}26;

        color: ${({ theme, color, invert }): string =>
            theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};

        ::placeholder {
            color: ${({ theme, invert }) => theme.colors.primary[invert ? 'contrast' : 'principal']}4c;
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
    color: ${({ theme, invert }) => theme.colors.secondary[invert ? 'contrast' : 'principal']};

    &:focus {
        color: ${({ theme, color, invert }) => theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};
    }

    &::placeholder {
        color: ${({ theme, invert }) => theme.colors.secondary[invert ? 'contrast' : 'principal']}4c;
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
