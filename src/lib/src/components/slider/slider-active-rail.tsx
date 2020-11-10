import { createClassName } from 'lib/src/utils';
import React from 'react';
import { getRailPercentage } from './slider-core';
import { SliderActivedRailElement } from './styles';

export interface SliderActivedRailProps {
    from: number;
    to: number;
    iterations: number;
    active?: boolean;
}

export const SliderActivedRail = ({ from, to, active = false, iterations }: SliderActivedRailProps): JSX.Element => {
    return (
        <SliderActivedRailElement
            className={createClassName(
                active ? ['slider', 'rail', 'actived', 'active'] : ['slider', 'rail', 'actived']
            )}
            style={{ left: `${getRailPercentage(from, iterations)}%`, width: `${getRailPercentage(to, iterations)}%` }}
            role="slider-actived-rail"
        />
    );
};
