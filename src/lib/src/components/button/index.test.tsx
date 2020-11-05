import React from 'react';
import Button from '.';
import { themedRender, ThemedRenderResult } from 'test/utils';
import { cleanup } from '@testing-library/react';

describe('Solid Button', () => {
    let rendered: ThemedRenderResult;

    afterEach(cleanup);

    beforeEach(() => {
        rendered = themedRender(<Button>Solid Button</Button>);
    });

    test('should has a text', () => {
        const { getByText } = rendered;

        expect(getByText(/Solid Button/).textContent).toBe('Solid Button');
    });

    test('should has the theme color', () => {
        const { getByRole, getTheme } = rendered;

        expect(getByRole('button')).toHaveStyle(`background-color: ${getTheme().colors.primary.principal}`);
    });
});

describe('Outline Button', () => {
    let rendered: ThemedRenderResult;

    afterEach(cleanup);

    beforeEach(() => {
        rendered = themedRender(<Button styleType="outline">Outline Button</Button>);
    });

    test('should has a text', () => {
        const { getByText } = rendered;

        expect(getByText(/Outline Button/).textContent).toBe('Outline Button');
    });

    test('should has the theme color', () => {
        const { getByRole, getTheme } = rendered;

        expect(getByRole('button')).toHaveStyle(
            `background-color: transparent; border-color: ${getTheme().colors.primary.principal}`
        );
    });
});
