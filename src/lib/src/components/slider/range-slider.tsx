import { createClassName } from 'lib/src/utils';
import React, { useEffect, useState, useRef } from 'react';
import { SliderActivedRail } from './active-rail';
import { getSliderIterationByMouse, getSliderIterationByValue, getCloserTracker } from './core';
import { SliderScaleConfig, SliderValueType } from './types';
import { SliderTracker } from './tracker';
import { SliderContainer, SliderRailElement } from './styles';

type RangeSliderValue<T extends SliderValueType> = [T?, T?];

export interface RangeSliderProps<T extends SliderValueType = number> extends SliderScaleConfig<T> {
    value?: RangeSliderValue<T>;
    onChange?: (value: RangeSliderValue<T>) => void;
}

export const RangeSlider = <T extends SliderValueType>({
    value = [undefined, undefined],
    onChange,
    scaleConfig,
}: RangeSliderProps<T>): JSX.Element => {
    const [iteration, setIteration] = useState<[number, number]>([
        getSliderIterationByValue(scaleConfig, value![0]),
        getSliderIterationByValue(scaleConfig, value![1]),
    ]);
    const [isFocused, setIsFocused] = useState<[boolean, boolean]>([false, false]);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();
        const newValue = getSliderIterationByMouse(
            event.currentTarget.getBoundingClientRect(),
            event.clientX,
            scaleConfig.maxIterations
        );

        if (getCloserTracker(iteration, newValue) === 0) {
            setIsFocused([true, false]);
            setIteration([newValue, iteration[1]]);
        } else {
            setIsFocused([false, true]);
            setIteration([iteration[0], newValue]);
        }
    };

    const mouseMoveHandler = (event: MouseEvent): void => {
        if ((!isFocused[0] && !isFocused[1]) || !containerRef.current) return;
        event.preventDefault();

        const newValue = getSliderIterationByMouse(
            containerRef.current.getBoundingClientRect(),
            event.clientX,
            scaleConfig.maxIterations
        );
        if (isFocused[0]) {
            if (newValue > iteration[1]) {
                setIteration([iteration[1], iteration[1]]);
            } else {
                setIteration([newValue, iteration[1]]);
            }
        } else {
            if (newValue < iteration[0]) {
                setIteration([iteration[0], iteration[0]]);
            } else {
                setIteration([iteration[0], newValue]);
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
        if (!isFocused) {
            setIteration([
                getSliderIterationByValue(scaleConfig, value![0]),
                getSliderIterationByValue(scaleConfig, value![1]),
            ]);
        }
    }, [...value!]);

    useEffect(() => {
        if (onChange) {
            onChange([scaleConfig.scaleFunction(iteration[0]), scaleConfig.scaleFunction(iteration[1])]);
        }
    }, [...iteration]);

    return (
        <SliderContainer
            className={createClassName(['slider', 'range', 'container'])}
            role="container"
            onMouseDown={mouseDownHandler}
            ref={containerRef}
        >
            <SliderRailElement />
            <SliderActivedRail from={iteration[0]} to={iteration[1]} iterations={scaleConfig.maxIterations} />
            <SliderTracker value={iteration[0]} active={isFocused[0]} scaleConfig={scaleConfig} />
            <SliderTracker value={iteration[1]} active={isFocused[1]} scaleConfig={scaleConfig} />
        </SliderContainer>
    );
};
