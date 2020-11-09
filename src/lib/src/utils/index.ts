import { Theme } from '../types';

export const createClassName = (name: string[], currentClassName?: string): string => {
    const prefix = 'kumi-';
    const separator = '-';

    return `${prefix}${name.join(separator)}${currentClassName ? ` ${currentClassName}` : ''}`;
};

export const getColorOrDefault = (theme: Theme, color = 'primary', invert = false, opacity = 1): string => {
    if (opacity >= 1) opacity = 1;
    else if (opacity <= 0) opacity = 0;

    const opacityHex = Math.round(255 * opacity).toString(16);

    return theme.colors[color][invert ? 'contrast' : 'principal'] + (opacity === 1 ? '' : opacityHex);
};
