import React from 'react';
import Button from '.';
import { renderWithTheme } from 'test/utils';

describe('default button', () => {
    test('should has a text', () => {
        const testText = 'Test Text';
        const { getByText } = renderWithTheme(<Button>{testText}</Button>);

        expect(getByText(testText).textContent).toBe(testText);
    });
});
