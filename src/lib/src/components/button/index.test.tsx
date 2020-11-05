import React from 'react';
import Button, { ButtonStyleTypes } from '.';
import { themedRender } from 'test/utils';
import { cleanup } from '@testing-library/react';

describe.each([undefined, 'outline', 'icon'] as ButtonStyleTypes[])('Default Button', styleType => {
    afterEach(cleanup);

    test(`${styleType} should has a text`, () => {
        const testText = 'test text';
        const { getByRole } = themedRender(<Button styleType={styleType}>{testText}</Button>);

        expect(getByRole('text').textContent).toBe(testText);
    });

    test(`${styleType} should not has a text`, () => {
        const { queryByRole } = themedRender(<Button styleType={styleType} />);

        expect(queryByRole('text')).toBeNull();
    });

    test(`${styleType} should has an icon`, () => {
        const { getByRole } = themedRender(
            <Button styleType={styleType} icon="cog">
                Foo
            </Button>
        );

        expect(getByRole('icon')).toBeTruthy();
    });

    test(`${styleType} should not has an icon`, () => {
        const { queryByRole } = themedRender(<Button styleType={styleType}>Foo</Button>);

        expect(queryByRole('icon')).toBeNull();
    });
});

describe('Solid Button', () => {
    let testText: string;

    beforeAll(() => {
        testText = 'test text';
    });

    afterEach(cleanup);

    test('should has the primary theme color', () => {
        const { getByRole, getByText, getTheme } = themedRender(<Button icon="cog">{testText}</Button>);

        expect(getByRole('button')).toHaveStyle(`background-color: ${getTheme().colors.primary.principal}`);
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors.primary.contrast}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.contrast}`);
    });

    test('should has the selected theme color', () => {
        const color = 'secondary';
        const { getByRole, getByText, getTheme } = themedRender(
            <Button color={color} icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(`background-color: ${getTheme().colors[color].principal}`);
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors[color].contrast}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors[color].contrast}`);
    });

    test('should invert the colors', () => {
        const { getByRole, getByText, getTheme } = themedRender(
            <Button invert icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(`background-color: ${getTheme().colors.primary.contrast}`);
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors.primary.principal}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.principal}`);
    });
});

describe('Outline Button', () => {
    let testText: string;

    beforeAll(() => {
        testText = 'test text';
    });

    afterEach(cleanup);

    test('should has the primary theme color', () => {
        const { getByRole, getByText, getTheme } = themedRender(
            <Button styleType="outline" icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(
            `background-color: transparent; border-color: ${getTheme().colors.primary.principal}`
        );
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors.primary.principal}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.principal}`);
    });

    test('should has the selected theme color', () => {
        const color = 'secondary';
        const { getByRole, getByText, getTheme } = themedRender(
            <Button styleType="outline" color={color} icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(
            `background-color: transparent; border-color: ${getTheme().colors[color].principal}`
        );
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors[color].principal}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors[color].principal}`);
    });

    test('should invert the colors', () => {
        const { getByRole, getByText, getTheme } = themedRender(
            <Button styleType="outline" invert icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(
            `background-color: transparent; border-color: ${getTheme().colors.primary.contrast}`
        );
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors.primary.contrast}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.contrast}`);
    });
});

describe('Icon Button', () => {
    let testText: string;

    beforeAll(() => {
        testText = 'test text';
    });

    afterEach(cleanup);

    test('should has the primary theme color', () => {
        const { getByRole, getByText, getTheme } = themedRender(
            <Button styleType="icon" icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(`background-color: transparent;`);
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors.primary.principal}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.principal}`);
    });

    test('should has the selected theme color', () => {
        const color = 'secondary';
        const { getByRole, getByText, getTheme } = themedRender(
            <Button styleType="icon" color={color} icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(`background-color: transparent;`);
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors[color].principal}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors[color].principal}`);
    });

    test('should invert the colors', () => {
        const { getByRole, getByText, getTheme } = themedRender(
            <Button styleType="icon" invert icon="cog">
                {testText}
            </Button>
        );

        expect(getByRole('button')).toHaveStyle(`background-color: transparent`);
        expect(getByText(testText)).toHaveStyle(`color: ${getTheme().colors.primary.contrast}`);
        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.contrast}`);
    });
});
