export type SliderValueType = number | string | symbol;

export type ScaleFunction<T extends SliderValueType> = (iteration: number) => T;

export type ScaleConfig<T extends SliderValueType> = {
    maxIterations: number;
    scaleFunction: ScaleFunction<T>;
};

export interface SliderScaleConfig<T extends SliderValueType> {
    scaleConfig: ScaleConfig<T>;
}
