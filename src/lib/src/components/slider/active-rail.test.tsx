import { cleanup } from '@testing-library/react';
import React from 'react';
import { themedRender } from 'test/utils';
import { SliderActivedRail } from './active-rail';
import { SliderTracker } from './tracker';

describe('Rail Tracker', () => {
    afterEach(cleanup);

    test.each`
        iterations | from | to    | expectedLeft | expectedWidth
        ${11}      | ${0} | ${10} | ${'0%'}      | ${'100%'}
        ${11}      | ${5} | ${6}  | ${'50%'}     | ${'10%'}
        ${11}      | ${3} | ${3}  | ${'30%'}     | ${'0%'}
        ${6}       | ${2} | ${3}  | ${'40%'}     | ${'20%'}
        ${6}       | ${1} | ${4}  | ${'20%'}     | ${'60%'}
    `('should has "left: $expectedLeft" property', ({ iterations, from, to, expectedLeft, expectedWidth }) => {
        const { getByRole } = themedRender(<SliderActivedRail from={from} to={to} iterations={iterations} />);

        expect(getByRole('slider-actived-rail')).toHaveStyle(`left: ${expectedLeft}; width: ${expectedWidth}`);
    });

    test('should has active css property when active', () => {
        const { getByRole } = themedRender(<SliderActivedRail from={0} to={9} iterations={10} active={true} />);

        const foundClass = getByRole('slider-actived-rail')
            .className.split(' ')
            .find(c => c.endsWith('active'));
        expect(foundClass).toBeTruthy();
    });

    test('should not has active css property when inactive', () => {
        const { getByRole } = themedRender(<SliderActivedRail from={0} to={9} iterations={10} active={false} />);

        const foundClass = getByRole('slider-actived-rail')
            .className.split(' ')
            .find(c => c.endsWith('active'));
        expect(foundClass).toBeFalsy();
    });
});
