import { createClassName } from 'lib/src/utils';
import React, { useEffect, useState, useRef } from 'react';
import { SliderActivedRail } from './slider-active-rail';
import {
    getSliderIterationByMouse,
    getSliderIterationByValue,
    SliderScaleConfig,
    SliderValueType,
} from './slider-core';
import { SliderTracker } from './slider-tracker';
import { SliderContainer, SliderRailElement } from './styles';

export interface PointSliderProps<T extends SliderValueType> extends SliderScaleConfig<T> {
    value?: T;
    onChange?: (value: T) => void;
    activeHail?: boolean;
}

export const PointSlider = <T extends SliderValueType>({
    value,
    onChange,
    activeHail = false,
    scaleConfig,
}: PointSliderProps<T>): JSX.Element => {
    const [iteration, setIteration] = useState<number>(getSliderIterationByValue(scaleConfig, value));
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIteration(
            getSliderIterationByMouse(
                event.currentTarget.getBoundingClientRect(),
                event.clientX,
                scaleConfig.maxIterations
            )
        );
        setIsFocused(true);
    };

    const mouseMoveHandler = (event: MouseEvent) => {
        if (!isFocused || !containerRef.current) return;
        event.preventDefault();
        setIteration(
            getSliderIterationByMouse(
                containerRef.current.getBoundingClientRect(),
                event.clientX,
                scaleConfig.maxIterations
            )
        );
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
        if (!isFocused) {
            setIteration(getSliderIterationByValue(scaleConfig, value));
        }
    }, [value]);

    useEffect(() => {
        if (onChange) {
            onChange(scaleConfig.scaleFunction(iteration));
        }
    }, [iteration]);

    return (
        <SliderContainer
            className={createClassName(['slider', 'container'])}
            role="container"
            onMouseDown={mouseDownHandler}
            ref={containerRef}
        >
            <SliderRailElement />
            {activeHail && <SliderActivedRail from={0} to={iteration} iterations={scaleConfig.maxIterations} />}
            <SliderTracker value={iteration} active={isFocused} scaleConfig={scaleConfig} />
        </SliderContainer>
    );
};
