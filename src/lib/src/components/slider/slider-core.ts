export type SliderValueType = number | string | symbol;

export type ScaleFunc<T extends SliderValueType> = (iteration: number) => T;

export type ScaleConfig<T extends SliderValueType> = {
    maxIterations: number;
    scaleFunction: ScaleFunc<T>;
};

export interface SliderScaleConfig<T extends SliderValueType> {
    scaleConfig: ScaleConfig<T>;
}

export const getSliderIterationByMouse = (rect: DOMRect, clientX: number, maxIterations: number): number => {
    const { width, left } = rect;

    const scale = width / maxIterations;
    const distance = clientX - left;

    let iteration = Math.round(distance / scale);
    if (iteration < 0) return 0;
    if (iteration > maxIterations - 1) return maxIterations - 1;
    return iteration;
};

export const getRailPercentage = (iteration: number, iterations: number): number => {
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
