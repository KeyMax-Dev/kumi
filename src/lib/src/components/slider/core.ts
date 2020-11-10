import { ScaleConfig, SliderValueType } from './types';

export const getSliderIterationByMouse = (rect: DOMRect, clientX: number, maxIterations: number): number => {
    const { width, left } = rect;

    const scale = width / maxIterations;
    const distance = clientX - left;

    let iteration = Math.round(distance / scale);
    if (iteration < 0) return 0;
    if (iteration > maxIterations - 1) return maxIterations - 1;
    return iteration;
};

export const getSliderRailPercentage = (iteration: number, iterations: number): number => {
    return (100 * iteration) / (iterations - 1);
};

export const getSliderIterationByValue = <T extends SliderValueType>(
    { maxIterations: iterations, scaleFunction: func }: ScaleConfig<T>,
    value?: T
): number => {
    for (let i = 0; i < iterations; i++) {
        if (func(i) === value) return i;
    }
    return 0;
};

export const getCloserTracker = (iteration: [number, number], newIteration: number): 0 | 1 => {
    if (Math.abs(iteration[0] - newIteration) < Math.abs(iteration[1] - newIteration)) {
        return 0;
    } else if (Math.abs(iteration[0] - newIteration) > Math.abs(iteration[1] - newIteration)) {
        return 1;
    } else {
        if (newIteration < iteration[0]) {
            return 0;
        } else {
            return 1;
        }
    }
};
