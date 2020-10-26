import { Theme } from 'lib/src/types';

const DarkTheme: Theme = {
    colors: {
        primary: { principal: '#1eca57', contrast: '#232323' },
        secondary: { principal: '#FFFFFF', contrast: '#000000' },
        danger: { principal: '#D40000', contrast: '#FFFFFF' },
        success: { principal: '#00D415', contrast: '#000000' },
    },
    defaultIconSize: '40px',
    transitions: {
        average: '0.3s ease-in-out',
        fast: '0.1s ease-in-out',
        slow: '0.7s ease-in-out',
    },
    borderRadius: '10px',
    boxShadow: {
        active: '0 1px 5px rgba(0,0,0,0.3)',
        normal: '0 2px 10px rgba(0,0,0,0.3)',
    },
    font: {
        body: {
            fontSize: '1rem',
            fontWeight: 'normal',
            lineHeight: '1rem',
            textAlign: 'left',
            fontFamily: "'Ubuntu Mono', monospace",
        },
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: '1.8rem',
            textAlign: 'center',
            fontFamily: "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif",
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: '1.8rem',
            textAlign: 'center',
            fontFamily: "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif",
        },
        input: {
            fontSize: '1rem',
            fontWeight: 400,
            textAlign: 'left',
        },
        p: {
            fontSize: '1rem',
            fontWeight: 'normal',
            lineHeight: '1rem',
            textAlign: 'left',
            fontFamily: "'Ubuntu Mono', monospace",
        },
        button: {
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: '1.2rem',
            textAlign: 'center',
            fontFamily: "'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif",
        },
    },
};

export default DarkTheme;
