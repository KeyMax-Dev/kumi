import React from 'react';
import { themedRender } from 'test/utils';
import { Icon } from '.';

describe('Icon', () => {
    test('should has the primary color', () => {
        const { getByRole, getTheme } = themedRender(<Icon name="cog" />);

        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.principal}`);
    });

    test('should has selected color', () => {
        const color = 'secondary';
        const { getByRole, getTheme } = themedRender(<Icon color={color} name="cog" />);

        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors[color].principal}`);
    });

    test('should invert the color', () => {
        const { getByRole, getTheme } = themedRender(<Icon invert name="cog" />);

        expect(getByRole('icon').querySelector('path')).toHaveStyle(`fill: ${getTheme().colors.primary.contrast}`);
    });
});
