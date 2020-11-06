import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import { IconButtonElement, OutlineButtonElement, SolidButtonElement } from './styles';
import { Icon } from 'lib';
import { createClassName } from 'lib/src/utils';

export type ButtonStyleTypes = 'solid' | 'outline' | 'icon';

export interface ButtonProps
    extends ThemedComponentProps,
        StyleTypedComponentProps<ButtonStyleTypes>,
        HTMLMotionProps<'button'> {
    icon?: string;
    iconSize?: string;
    children?: string;
}

export const Button = ({
    styleType = 'solid',
    icon,
    iconSize,
    children,
    className,
    ...props
}: ButtonProps): JSX.Element => {
    switch (styleType) {
        case 'icon':
            return (
                <IconButtonElement
                    iconSize={iconSize}
                    {...props}
                    className={createClassName(['button', 'icon'], className)}
                >
                    {icon && (
                        <Icon
                            name={icon}
                            width={iconSize}
                            height={iconSize}
                            invert={props.invert}
                            color={props.color}
                        />
                    )}
                    {children && <span role="text">{children}</span>}
                </IconButtonElement>
            );
        case 'outline':
            return (
                <OutlineButtonElement {...props} className={createClassName(['button', 'outline'], className)}>
                    {icon && (
                        <Icon
                            name={icon}
                            width={iconSize}
                            height={iconSize}
                            invert={props.invert}
                            color={props.color}
                        />
                    )}
                    {children && <span role="text">{children}</span>}
                </OutlineButtonElement>
            );
        default:
            return (
                <SolidButtonElement {...props} className={createClassName(['button', 'solid'], className)}>
                    {icon && (
                        <Icon
                            name={icon}
                            width={iconSize}
                            height={iconSize}
                            invert={!props.invert}
                            color={props.color}
                        />
                    )}
                    {children && <span role="text">{children}</span>}
                </SolidButtonElement>
            );
    }
};
