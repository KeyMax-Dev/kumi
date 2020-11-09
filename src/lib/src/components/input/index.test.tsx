import React from 'react';
import { act } from 'react-dom/test-utils';
import { themedRender } from 'test/utils';
import { Input, InputStyleTypes } from '.';

describe.each<InputStyleTypes>(['solid', 'downline', 'outline'])('Input', styleType => {
    test('should has a textbox', () => {
        const { getByRole } = themedRender(<Input styleType={styleType} />);

        expect(getByRole('textbox')).toBeTruthy();
    });

    test('should has selected theme without focus colors', () => {
        const color = 'secondary';
        const label = 'Label';
        const { getAllByRole, getByRole, getTheme, getByText } = themedRender(
            <Input styleType={styleType} color={color} iconLeft="cog" iconRight="cog" label={label} />
        );

        getAllByRole('icon').forEach(iconElement =>
            expect(iconElement.querySelector('path')).toHaveStyle(`fill: ${getTheme().colors[color].principal}4c`)
        );
        expect(getByText(label)).toHaveStyle(`color: ${getTheme().colors[color].principal}4c`);
        expect(getByRole('textbox')).toHaveStyle(`color: ${getTheme().colors[color].principal}`);
    });

    test.skip('should has selected theme colors on focus', () => {
        const color = 'secondary';
        const { getByRole } = themedRender(<Input color={color} iconLeft="cog" label="Label" />);

        act(() => getByRole('textbox').focus());
        expect(getByRole('textbox')).toHaveFocus();

        // TODO: Discover a focus-within test
        // expect(getByRole('textbox')).toHaveStyle(`color: ${getTheme().colors[color].principal}`);
        // expect(getByRole('textbox-container')).toHaveStyle(`border-bottom: 2px solid #1eca57`);
    });
});
