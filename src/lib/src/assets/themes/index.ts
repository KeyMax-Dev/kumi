import { Theme } from 'lib/src/types';
import LightTheme from './light-theme';
import DarkTheme from './dark-theme';

let GlobalTheme: Theme = DarkTheme;
const setGlobalTheme = (theme: Theme): void => {
    GlobalTheme = theme;
};
const getGlobalTheme = (): Theme => {
    return GlobalTheme;
};

export { LightTheme, DarkTheme, setGlobalTheme, getGlobalTheme };
