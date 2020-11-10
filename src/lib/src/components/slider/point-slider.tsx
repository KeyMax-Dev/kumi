import { createClassName } from 'lib/src/utils';
import React, { useEffect, useState, useRef } from 'react';
import { SliderActivedRail } from './slider-active-rail';
import { getNewValue } from './slider-core';
import { SliderTracker } from './slider-tracker';
import { SliderContainer, SliderRailElement } from './styles';

export interface PointSliderProps {
    value?: number;
    onChange?: (value: number) => void;
    activeHail?: boolean;
}

export const PointSlider = ({ value = 0, onChange, activeHail = false }: PointSliderProps): JSX.Element => {
    const [currentValue, setCurrentValue] = useState<number>(value);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setCurrentValue(getNewValue(event.currentTarget.getBoundingClientRect(), event.clientX));
        setIsFocused(true);
    };

    const mouseMoveHandler = (event: MouseEvent) => {
        if (!isFocused || !containerRef.current) return;
        event.preventDefault();
        setCurrentValue(getNewValue(containerRef.current.getBoundingClientRect(), event.clientX));
    };

    const stopMovementHandler = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (!isFocused) return;
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', stopMovementHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', stopMovementHandler);
        };
    });

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    useEffect(() => {
        if (onChange) {
            onChange(currentValue);
        }
    }, [currentValue]);

    return (
        <SliderContainer
            className={createClassName(['slider', 'container'])}
            role="container"
            onMouseDown={mouseDownHandler}
            ref={containerRef}
        >
            <SliderRailElement />
            {activeHail && <SliderActivedRail from={0} width={currentValue} />}
            <SliderTracker value={currentValue} active={isFocused} />
        </SliderContainer>
    );
};
