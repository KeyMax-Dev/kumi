import { createClassName } from 'lib/src/utils';
import React, { useEffect, useState } from 'react';
import { SliderTrackerElement } from './styles';

export interface SliderTrackerProps {
    value?: number;
    active?: boolean;
}

export const SliderTracker = ({ value = 0, active = false }: SliderTrackerProps): JSX.Element => {
    return (
        <SliderTrackerElement
            className={createClassName(active ? ['slider', 'tracker', 'active'] : ['slider', 'tracker'])}
            role="slider-tracker"
            tabIndex={0}
            style={{ left: `${value}%` }}
        >
            <label>{value}</label>
        </SliderTrackerElement>
    );
};
