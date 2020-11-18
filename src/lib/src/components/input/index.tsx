import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import { InputElement, InputLabelElement } from './styles';
import { Icon } from '../icon';
import { createClassName } from 'lib/src/utils';
import { DownlineFormField, OutlineFormField, SolidFormField } from '../form-field';

export type InputStyleTypes = 'downline' | 'outline' | 'solid';

export interface InputProps
    extends ThemedComponentProps,
        StyleTypedComponentProps<InputStyleTypes>,
        HTMLMotionProps<'input'> {
    iconLeft?: string;
    iconRight?: string;
    label?: string;
    containerProps?: HTMLMotionProps<'div'>;
}

export const Input = ({
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
            <InputElement {...props} color={color} invert={invert} />
            {iconRight && <Icon name={iconRight} color={color} width="25px" height="25px" />}
        </>
    );

    switch (styleType) {
        case 'outline':
            return (
                <OutlineFormField color={color} invert={invert} {...containerProps}>
                    {commonContent}
                </OutlineFormField>
            );
        case 'solid':
            return (
                <SolidFormField color={color} invert={invert} {...containerProps}>
                    {commonContent}
                </SolidFormField>
            );
        default:
            return (
                <DownlineFormField color={color} invert={invert} {...containerProps}>
                    {commonContent}
                </DownlineFormField>
            );
    }
};
