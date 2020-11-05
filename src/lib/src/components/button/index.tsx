import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import { IconButtonElement, OutlineButtonElement, SolidButtonElement } from './styles';
import Icon from '../icon';
import { createClassName } from 'lib/src/utils';

type ButtonStyleTypes = 'solid' | 'outline' | 'icon';

interface ButtonProps
    extends ThemedComponentProps,
        StyleTypedComponentProps<ButtonStyleTypes>,
        HTMLMotionProps<'button'> {
    icon?: string;
    iconSize?: string;
    children?: string;
}

const Button = ({
    styleType = 'solid',
    icon,
    iconSize,
    children,
    className,
    invert,
    ...props
}: ButtonProps): JSX.Element => {
    const Content = (
        <>
            {icon && <Icon name={icon} width={iconSize} height={iconSize} invert={invert} />}
            {children && <span>{children}</span>}
        </>
    );

    switch (styleType) {
        case 'icon':
            if (!icon) {
                throw new Error('Icon button must have an icon');
            }
            return (
                <IconButtonElement
                    iconSize={iconSize}
                    {...props}
                    className={createClassName(['button', 'icon'], className)}
                >
                    {Content}
                </IconButtonElement>
            );
        case 'outline':
            return (
                <OutlineButtonElement {...props} className={createClassName(['button', 'outline'], className)}>
                    {Content}
                </OutlineButtonElement>
            );
        default:
            return (
                <SolidButtonElement {...props} className={createClassName(['button', 'solid'], className)}>
                    {Content}
                </SolidButtonElement>
            );
    }
};

export default Button;
