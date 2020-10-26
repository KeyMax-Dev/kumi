import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SolidButtonElement = styled(motion.button)`
    background-color: ${({ theme }) => theme.colors.primary.principal};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 3px;
    padding: 15px 30px;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
    outline: none;

    transition: ${({ theme }) => theme.transitions.fast};

    span {
        color: ${({ theme }) => theme.colors.primary.contrast};
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
`;

export const OutlineButtonElement = styled(motion.button)`
    background-color: transparent;
    border: solid 2px ${({ theme }) => theme.colors.primary.principal};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 3px;
    padding: 15px 30px;
    outline: none;

    transition: ${({ theme }) => theme.transitions.fast};

    span {
        color: ${({ theme }) => theme.colors.primary.principal};
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
        background-color: ${({ theme }) => theme.colors.primary.principal}4c;
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
