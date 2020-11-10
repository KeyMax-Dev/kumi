import { createClassName } from 'lib/src/utils';
import React from 'react';
import { SliderActivedRailElement } from './styles';

export interface SliderActivedRailProps {
    from: number;
    width: number;
    active?: boolean;
}

export const SliderActivedRail = ({ from, width, active = false }: SliderActivedRailProps): JSX.Element => {
    return (
        <SliderActivedRailElement
            className={createClassName(active ? ['slider', 'rail', 'actived'] : ['slider', 'rail'])}
            style={{ left: `${from}%`, width: `${width}%` }}
            role="slider-actived-rail"
        />
    );
};
