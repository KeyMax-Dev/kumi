import RouterPath from 'app/types/router-path';

type RouterPathKeys = 'Home' | 'Icons' | 'Buttons' | 'Inputs' | 'Sliders' | 'Selects';

export const RouterPaths: { [key in RouterPathKeys]: RouterPath } = {
    Home: { name: 'Home', path: '/' },
    Icons: { name: 'Icons', path: '/icons' },
    Buttons: { name: 'Buttons', path: '/buttons' },
    Inputs: { name: 'Inputs', path: '/inputs' },
    Sliders: { name: 'Sliders', path: '/sliders' },
    Selects: { name: 'Selects', path: '/selects' },
};
