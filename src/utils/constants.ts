import RouterPath from '../types/router-path';

type RouterPathKeys = 'Home' | 'Icons';

export const RouterPaths: { [key in RouterPathKeys]: RouterPath } = {
    Home: { name: 'Home', path: '/' },
    Icons: { name: 'Icons', path: '/icons' },
};
