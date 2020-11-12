import { cleanup } from '@testing-library/react';
import React from 'react';
import { themedRender } from 'test/utils';
import { SliderTracker } from './tracker';

const NUMBER_SCALE_CONFIG = { scaleFunction: (x: number) => x, maxIterations: 11 };

const TEXT_ARRAY = ['a', 'b', 'c', 'd', 'e', 'f'];
const TEXT_SCALE_CONFIG = { scaleFunction: (x: number) => TEXT_ARRAY[x], maxIterations: TEXT_ARRAY.length };

describe('Slider Tracker', () => {
    afterEach(cleanup);

    test.each`
        scaleConfig            | value | expectedLeft
        ${NUMBER_SCALE_CONFIG} | ${0}  | ${'0%'}
        ${NUMBER_SCALE_CONFIG} | ${5}  | ${'50%'}
        ${NUMBER_SCALE_CONFIG} | ${10} | ${'100%'}
        ${TEXT_SCALE_CONFIG}   | ${2}  | ${'40%'}
        ${TEXT_SCALE_CONFIG}   | ${4}  | ${'80%'}
    `('should has "left: $expectedLeft" property', ({ scaleConfig, value, expectedLeft }) => {
        const { getByRole } = themedRender(<SliderTracker value={value} scaleConfig={scaleConfig} />);

        expect(getByRole('slider-tracker')).toHaveStyle(`left: ${expectedLeft}`);
    });

    test.each`
        scaleConfig            | value | expectedText
        ${NUMBER_SCALE_CONFIG} | ${0}  | ${'0'}
        ${NUMBER_SCALE_CONFIG} | ${10} | ${'10'}
        ${TEXT_SCALE_CONFIG}   | ${2}  | ${'c'}
        ${TEXT_SCALE_CONFIG}   | ${4}  | ${'e'}
    `('should has the text $expectedText to value $value', ({ scaleConfig, value, expectedText }) => {
        const { getByText } = themedRender(<SliderTracker value={value} scaleConfig={scaleConfig} />);

        expect(getByText(expectedText)).toBeTruthy();
    });

    test('should has active css property when active', () => {
        const { getByRole } = themedRender(<SliderTracker scaleConfig={NUMBER_SCALE_CONFIG} active={true} />);

        const foundClass = getByRole('slider-tracker')
            .className.split(' ')
            .find(c => c.endsWith('active'));
        expect(foundClass).toBeTruthy();
    });

    test('should not has active css property when inactive', () => {
        const { getByRole } = themedRender(<SliderTracker scaleConfig={NUMBER_SCALE_CONFIG} active={false} />);

        const foundClass = getByRole('slider-tracker')
            .className.split(' ')
            .find(c => c.endsWith('active'));
        expect(foundClass).toBeFalsy();
    });
});
