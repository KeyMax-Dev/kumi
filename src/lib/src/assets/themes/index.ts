import { Theme } from 'lib/src/types';
import LightTheme from './light-theme';
import DarkTheme from './dark-theme';

let GlobalTheme: Theme =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? LightTheme : DarkTheme;

const setGlobalTheme = (theme: Theme): void => {
    GlobalTheme = theme;
};
const getGlobalTheme = (): Theme => {
    return GlobalTheme;
};

export { LightTheme, DarkTheme, setGlobalTheme, getGlobalTheme };
