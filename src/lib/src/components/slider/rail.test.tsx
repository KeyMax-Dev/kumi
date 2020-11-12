import { cleanup } from '@testing-library/react';
import React from 'react';
import { themedRender } from 'test/utils';
import { SliderRail } from './rail';

describe('Slider Rail', () => {
    afterEach(cleanup);

    test('should exist', () => {
        const { getByRole } = themedRender(<SliderRail />);

        expect(getByRole('slider-rail')).toBeTruthy();
    });
});
