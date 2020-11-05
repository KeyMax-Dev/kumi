import React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { getGlobalTheme, Theme } from 'lib';
import { ThemeProvider } from 'styled-components';

export interface ThemedRenderResult extends RenderResult {
    getTheme: () => Theme;
}

export const themedRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): ThemedRenderResult => {
    const theme = getGlobalTheme();

    return {
        ...render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options),
        getTheme: () => theme,
    };
};
