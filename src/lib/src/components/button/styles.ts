import { motion } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import { getColorOrDefault } from 'lib/src/utils';
import styled from 'styled-components';

export const SolidButtonElement = styled(motion.button)<ThemedComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 3px;
    padding: 15px 30px;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    outline: none;

    transition: ${({ theme }) => theme.transitions.fast};

    span {
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, !invert)};
        font-size: ${({ theme }) => theme.font.button.fontSize};
        font-family: ${({ theme }) => theme.font.button.fontFamily};
        font-weight: ${({ theme }) => theme.font.button.fontWeight};
        text-align: ${({ theme }) => theme.font.button.textAlign};
        line-height: ${({ theme }) => theme.font.button.lineHeight};
    }

    :hover {
        cursor: pointer;
    }

    :active {
        transform: scale(0.97);
    }

    :disabled {
        box-shadow: none;
        opacity: 0.3;

        :active,
        :hover {
            cursor: default;
            transform: none;
        }
    }

    .kumi-icon {
        margin-right: 10px;
    }
`;

export const OutlineButtonElement = styled(motion.button)<ThemedComponentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: solid 2px ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 3px;
    padding: 15px 30px;
    outline: none;

    transition: ${({ theme }) => theme.transitions.fast};

    span {
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
        font-size: ${({ theme }) => theme.font.button.fontSize};
        font-family: ${({ theme }) => theme.font.button.fontFamily};
        font-weight: ${({ theme }) => theme.font.button.fontWeight};
        text-align: ${({ theme }) => theme.font.button.textAlign};
        line-height: ${({ theme }) => theme.font.button.lineHeight};
    }

    :hover {
        cursor: pointer;
    }

    :active {
        background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    }

    :disabled {
        opacity: 0.3;

        :active,
        :hover {
            cursor: default;
            transform: none;
            background-color: transparent;
        }
    }

    .kumi-icon {
        margin-right: 10px;
    }
`;

export const IconButtonElement = styled(motion.button)<ThemedComponentProps & { iconSize?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 3px;
    padding: 15px;
    outline: none;

    transition: ${({ theme }) => theme.transitions.fast};

    span {
        margin-top: 0.3rem;
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
        font-size: 0.6rem;
        font-family: ${({ theme }) => theme.font.button.fontFamily};
        font-weight: 100;
        text-align: center;
        line-height: 1;
        text-transform: uppercase;
        max-width: calc(2 * ${({ theme }) => theme.defaultIconSize});
    }

    :hover {
        cursor: pointer;
    }

    :active {
        background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    }

    :disabled {
        opacity: 0.3;

        :active,
        :hover {
            cursor: default;
            transform: none;
            background-color: transparent;
        }
    }
`;
