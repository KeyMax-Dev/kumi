import { createClassName } from 'lib/src/utils';
import React from 'react';
import { SliderRailElement } from './styles';

export const SliderRail = (): JSX.Element => {
    return <SliderRailElement className={createClassName(['slider', 'tracking', 'rail'])} role="slider-rail" />;
};
