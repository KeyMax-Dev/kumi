import React from 'react';
import Icons from 'lib/src/assets/svgs/icons';
import { IconElement } from './styles';
import { IconProps } from 'lib/src/types/components/icon';
import { createClassName } from 'lib/src/utils';

const Icon = ({ className, ...props }: IconProps): JSX.Element => {
    return (
        <IconElement {...props} className={createClassName(['icon'], className)}>
            {Icons[props.name]}
        </IconElement>
    );
};

export default Icon;
