import { createClassName } from 'lib/src/utils';
import React, { useEffect, useState, useRef } from 'react';
import { SliderActivedRail } from './slider-active-rail';
import { getNewValue } from './slider-core';
import { SliderTracker } from './slider-tracker';
import { SliderContainer, SliderRailElement } from './styles';

type RangeSliderValue = [number, number];

export interface RangeSliderProps {
    value?: RangeSliderValue;
    onChange?: (value: RangeSliderValue) => void;
}

const closerTracker = (currentValue: RangeSliderValue, newValue: number): 0 | 1 => {
    if (Math.abs(currentValue[0] - newValue) < Math.abs(currentValue[1] - newValue)) {
        return 0;
    } else if (Math.abs(currentValue[0] - newValue) > Math.abs(currentValue[1] - newValue)) {
        return 1;
    } else {
        if (newValue < currentValue[0]) {
            return 0;
        } else {
            return 1;
        }
    }
};

export const RangeSlider = ({ value = [0, 100], onChange }: RangeSliderProps): JSX.Element => {
    const [currentValue, setCurrentValue] = useState<RangeSliderValue>(value);
    const [isFocused, setIsFocused] = useState<[boolean, boolean]>([false, false]);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();
        const newValue = getNewValue(event.currentTarget.getBoundingClientRect(), event.clientX);
        console.log(closerTracker(currentValue, newValue));

        if (closerTracker(currentValue, newValue) === 0) {
            setIsFocused([true, false]);
            setCurrentValue([newValue, currentValue[1]]);
        } else {
            setIsFocused([false, true]);
            setCurrentValue([currentValue[0], newValue]);
        }
    };

    const mouseMoveHandler = (event: MouseEvent): void => {
        if ((!isFocused[0] && !isFocused[1]) || !containerRef.current) return;
        event.preventDefault();

        const newValue = getNewValue(containerRef.current.getBoundingClientRect(), event.clientX);
        if (isFocused[0]) {
            if (newValue > currentValue[1]) {
                setCurrentValue([currentValue[1], currentValue[1]]);
            } else {
                setCurrentValue([newValue, currentValue[1]]);
            }
        } else {
            if (newValue < currentValue[0]) {
                setCurrentValue([currentValue[0], currentValue[0]]);
            } else {
                setCurrentValue([currentValue[0], newValue]);
            }
        }
    };

    const stopMovementHandler = () => {
        setIsFocused([false, false]);
    };

    useEffect(() => {
        if (!isFocused[0] && !isFocused[1]) return;
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', stopMovementHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', stopMovementHandler);
        };
    }, [...isFocused]);

    useEffect(() => {
        setCurrentValue(value);
    }, [...value]);

    useEffect(() => {
        if (onChange) {
            onChange(currentValue);
        }
    }, [...currentValue]);

    return (
        <SliderContainer
            className={createClassName(['slider', 'container'])}
            role="container"
            onMouseDown={mouseDownHandler}
            ref={containerRef}
        >
            <SliderRailElement />
            <SliderActivedRail from={currentValue[0]} width={currentValue[1] - currentValue[0]} />
            <SliderTracker value={currentValue[0]} active={isFocused[0]} />
            <SliderTracker value={currentValue[1]} active={isFocused[1]} />
        </SliderContainer>
    );
};
