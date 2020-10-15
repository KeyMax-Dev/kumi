import React from 'react';
import Icons from 'lib/src/assets/svgs/icons';
import { IconElement } from './styles';
import { IconProps } from 'lib/src/types/components/icon';

const Icon = (props: IconProps): JSX.Element => {
    return <IconElement {...props}>{Icons[props.name]}</IconElement>;
};

export default Icon;
