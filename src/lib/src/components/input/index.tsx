import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import {
    OutlineInputContainer,
    DownlineInputContainer,
    InputElement,
    InputLabelElement,
    SolidInputContainer,
} from './styles';
import Icon from '../icon';
import { createClassName } from 'lib/src/utils';

type InputStyleTypes = 'downline' | 'outline' | 'solid';

interface InputProps extends ThemedComponentProps, StyleTypedComponentProps<InputStyleTypes>, HTMLMotionProps<'input'> {
    iconLeft?: string;
    iconRight?: string;
    label?: string;
    containerProps?: HTMLMotionProps<'div'>;
}

const Input = ({
    color,
    invert,
    styleType,
    iconLeft,
    iconRight,
    containerProps,
    label,
    ...props
}: InputProps): JSX.Element => {
    const commonContent: JSX.Element = (
        <>
            {label && <InputLabelElement>{label}</InputLabelElement>}
            {iconLeft && <Icon name={iconLeft} color={color} width="25px" height="25px" />}
            <InputElement {...props} />
            {iconRight && <Icon name={iconRight} color={color} width="25px" height="25px" />}
        </>
    );

    switch (styleType) {
        case 'outline':
            return (
                <OutlineInputContainer
                    color={color}
                    invert={invert}
                    {...containerProps}
                    className={createClassName(['input', 'container', 'outline'], containerProps?.className)}
                >
                    {commonContent}
                </OutlineInputContainer>
            );
        case 'solid':
            return (
                <SolidInputContainer
                    color={color}
                    invert={invert}
                    {...containerProps}
                    className={createClassName(['input', 'container', 'solid'], containerProps?.className)}
                >
                    {commonContent}
                </SolidInputContainer>
            );
        default:
            return (
                <DownlineInputContainer
                    color={color}
                    invert={invert}
                    {...containerProps}
                    className={createClassName(['input', 'container', 'downline'], containerProps?.className)}
                >
                    {commonContent}
                </DownlineInputContainer>
            );
    }
};

export default Input;
