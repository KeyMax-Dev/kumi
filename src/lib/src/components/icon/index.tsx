import React from 'react';
import Icons from 'lib/src/assets/svgs/icons';
import { IconElement } from './styles';
import { createClassName } from 'lib/src/utils';
import { ThemedComponentProps } from 'lib/src/types';
import { HTMLMotionProps } from 'framer-motion';

export interface IconProps extends ThemedComponentProps, HTMLMotionProps<'div'> {
    name: string;
    height?: string;
    width?: string;
}

export const Icon = ({ className, ...props }: IconProps): JSX.Element => {
    return (
        <IconElement {...props} className={createClassName(['icon'], className)} role="icon">
            {Icons[props.name]}
        </IconElement>
    );
};
