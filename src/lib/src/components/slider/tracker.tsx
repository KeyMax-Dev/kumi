import { createClassName } from 'lib/src/utils';
import React from 'react';
import { getSliderRailPercentage } from './core';
import { ScaleConfig, SliderValueType } from './types';
import { SliderTrackerElement } from './styles';

export interface SliderTrackerProps<T extends SliderValueType> {
    value?: number;
    active?: boolean;
    scaleConfig: ScaleConfig<T>;
}

export const SliderTracker = <T extends SliderValueType>({
    value = 0,
    active = false,
    scaleConfig: { scaleFunction, maxIterations },
}: SliderTrackerProps<T>): JSX.Element => {
    return (
        <SliderTrackerElement
            className={createClassName(active ? ['slider', 'tracker', 'active'] : ['slider', 'tracker'])}
            role="slider-tracker"
            tabIndex={0}
            style={{ left: `${getSliderRailPercentage(value, maxIterations)}%` }}
        >
            <label>{scaleFunction(value)}</label>
        </SliderTrackerElement>
    );
};
