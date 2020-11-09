import React from 'react';
import { createClassName, getColorOrDefault } from '.';
import { DarkTheme, LightTheme } from '../assets';
import { Theme } from '../types';

describe('createClassName util', () => {
    test('should create one term className', () => {
        expect(createClassName(['term1'])).toBe('kumi-term1');
    });

    test('should maintain the current className and add one term', () => {
        expect(createClassName(['term1'], 'before-class-name')).toBe('kumi-term1 before-class-name');
    });

    test('should create multiple terms className', () => {
        expect(createClassName(['term1', 'term2', 'term3'])).toBe('kumi-term1-term2-term3');
    });

    test('should maintain the current className and add multiple terms', () => {
        expect(createClassName(['term1', 'term2', 'term3'], 'before-class-name')).toBe(
            'kumi-term1-term2-term3 before-class-name'
        );
    });
});

describe.each<Theme>([LightTheme, DarkTheme])('getColorOrDefault util', theme => {
    test('should return default color', () => {
        expect(getColorOrDefault(theme)).toBe(theme.colors.primary.principal);
    });

    test('should return default color inverted', () => {
        expect(getColorOrDefault(theme, undefined, true)).toBe(theme.colors.primary.contrast);
    });

    test('should return default color with 30% opacity', () => {
        expect(getColorOrDefault(theme, undefined, undefined, 0.3)).toBe(theme.colors.primary.principal + '4d');
    });

    test('should return default color inverted with 30% opacity', () => {
        expect(getColorOrDefault(theme, undefined, true, 0.3)).toBe(theme.colors.primary.contrast + '4d');
    });

    test.each(['secondary', 'danger', 'success'])('should return selected color', color => {
        expect(getColorOrDefault(theme, color)).toBe(theme.colors[color].principal);
    });

    test.each(['secondary', 'danger', 'success'])('should return selected color inverted', color => {
        expect(getColorOrDefault(theme, color, true)).toBe(theme.colors[color].contrast);
    });

    test.each(['secondary', 'danger', 'success'])('should return selected color with 30% opacity', color => {
        expect(getColorOrDefault(theme, color, undefined, 0.3)).toBe(theme.colors[color].principal + '4d');
    });

    test.each(['secondary', 'danger', 'success'])('should return selected color inverted with 30% opacity', color => {
        expect(getColorOrDefault(theme, color, true, 0.3)).toBe(theme.colors[color].contrast + '4d');
    });
});
