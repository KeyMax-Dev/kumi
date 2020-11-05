import React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { getGlobalTheme } from 'lib';
import { ThemeProvider } from 'styled-components';

export const renderWithTheme = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
    return render(<ThemeProvider theme={getGlobalTheme}>{ui}</ThemeProvider>, options);
};
