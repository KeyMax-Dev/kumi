import { createClassName } from 'lib/src/utils';
import React, { DragEvent, useEffect, useState, useRef } from 'react';
import { SliderContainer, SliderTrackerElement, SliderTrackingRailElement } from './styles';

interface SliderTrackerProps {
    value?: number;
    active?: boolean;
}

const SliderTracker = ({ value = 0, active = false }: SliderTrackerProps): JSX.Element => {
    const [left, setLeft] = useState<number>(value);

    useEffect(() => {
        setLeft(value);
    }, [value]);

    return (
        <SliderTrackerElement
            className={createClassName(active ? ['slider', 'tracker', 'active'] : ['slider', 'tracker'])}
            role="slider-tracker"
            tabIndex={0}
            style={{ left: `${left}%` }}
        >
            <label>{value}</label>
        </SliderTrackerElement>
    );
};

const getNewValue = (rect: DOMRect, clientX: number) => {
    const { width, left } = rect;

    const scale = width / 100;
    const distance = clientX - left;

    let result = Math.round(distance / scale);
    if (result < 0) return 0;
    if (result > 100) return 100;
    return result;
};

export const Slider = (): JSX.Element => {
    const [value, setValue] = useState<number>(0);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setValue(getNewValue(event.currentTarget.getBoundingClientRect(), event.clientX));
        setIsFocused(true);
    };

    const mouseMoveHandler = (event: MouseEvent) => {
        if (!isFocused || !containerRef.current) return;
        event.preventDefault();
        setValue(getNewValue(containerRef.current.getBoundingClientRect(), event.clientX));
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

    return (
        <SliderContainer
            className={createClassName(['slider', 'container'])}
            role="container"
            onMouseDown={mouseDownHandler}
            ref={containerRef}
        >
            <SliderTrackingRailElement
                className={createClassName(['slider', 'tracking', 'rail'])}
                role="slider-tracking-rail"
            />
            <SliderTracker value={value} active={isFocused} />
        </SliderContainer>
    );
};
