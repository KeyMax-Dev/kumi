import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import { InputElement } from './styles';
import { Icon } from '../icon';
import { DownlineFormField, FormField, FormFieldLabel, OutlineFormField, SolidFormField } from '../form-field';

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
    let Container: typeof FormField;

    switch (styleType) {
        case 'outline':
            Container = OutlineFormField;
            break;
        case 'solid':
            Container = SolidFormField;
            break;
        default:
            Container = DownlineFormField;
    }

    return (
        <Container color={color} invert={invert} {...containerProps}>
            {label && <FormFieldLabel>{label}</FormFieldLabel>}
            {iconLeft && <Icon name={iconLeft} color={color} width="25px" height="25px" />}
            <InputElement {...props} color={color} invert={invert} />
            {iconRight && <Icon name={iconRight} color={color} width="25px" height="25px" />}
        </Container>
    );
};
