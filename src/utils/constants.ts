import RouterPath from '../types/router-path';

type RouterPathKeys = 'Home';

export const RouterPaths: { [key in RouterPathKeys]: RouterPath } = {
    Home: { name: 'Home', path: '' },
};
