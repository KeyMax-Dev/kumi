import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import { IconButtonElement, OutlineButtonElement, SolidButtonElement } from './styles';
import Icon from '../icon';

type ButtonStyleTypes = 'solid' | 'outline' | 'icon';

interface ButtonProps extends ThemedComponentProps, HTMLMotionProps<'button'> {
    styleType?: ButtonStyleTypes;
    icon?: string;
    iconSize?: string;
    children?: string;
}

const Button = ({ styleType = 'solid', icon, iconSize, children, ...props }: ButtonProps): JSX.Element => {
    switch (styleType) {
        case 'icon':
            if (!icon) {
                throw new Error('Icon button must have an icon');
            }
            return (
                <IconButtonElement iconSize={iconSize} {...props}>
                    <Icon name={icon} width={iconSize} height={iconSize} />
                    {children && <span>{children}</span>}
                </IconButtonElement>
            );
        case 'outline':
            return (
                <OutlineButtonElement {...props}>
                    {icon && <Icon name={icon} width={iconSize} height={iconSize} />}
                    <span>{children}</span>
                </OutlineButtonElement>
            );
        default:
            return (
                <SolidButtonElement {...props}>
                    {icon && <Icon name={icon} width={iconSize} height={iconSize} />}
                    <span>{children}</span>
                </SolidButtonElement>
            );
    }
};

export default Button;