import { createClassName } from 'lib/src/utils';
import React from 'react';
import { getSliderRailPercentage } from './core';
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
            style={{
                left: `${getSliderRailPercentage(from, iterations)}%`,
                width: `${getSliderRailPercentage(to, iterations)}%`,
            }}
            role="slider-actived-rail"
        />
    );
};
