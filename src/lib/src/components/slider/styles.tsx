import { ThemedComponentProps } from 'lib/src/types';
import { getColorOrDefault } from 'lib/src/utils';
import styled from 'styled-components';
import { FormField } from '../form-field';

export const SliderContainer = styled(FormField)`
    margin-top: 20px;
    position: relative;
    justify-content: center;
    align-items: center;

    background-color: transparent;
`;

export const SliderRailElement = styled.div<ThemedComponentProps>`
    flex: 1;
    width: 100%;
    height: 5px;
    background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.15)};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export const SliderActivedRailElement = styled.div<ThemedComponentProps>`
    position: absolute;
    height: 5px;

    background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
    border-radius: ${({ theme }) => theme.borderRadius};
`;

export const SliderTrackerElement = styled.div<ThemedComponentProps>`
    position: absolute;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    background-color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, !invert)};
    border: 5px solid ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    outline: none;
    transition: box-shadow ${({ theme }) => theme.transitions.average},
        transform ${({ theme }) => theme.transitions.fast};

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 8px ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    }

    &[class$='active'] {
        cursor: pointer;
        transform: scale(0.9);
        box-shadow: 0 0 0 16px ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert, 0.3)};
    }

    label {
        color: ${({ theme, color, invert }) => getColorOrDefault(theme, color, invert)};
        font-family: ${({ theme }) => theme.font.input.fontFamily};
        font-weight: bold;
        font-size: calc(1.5 * ${({ theme }) => theme.font.input.fontSize});
        position: absolute;
        text-align: center;
        top: -150%;
    }
`;
