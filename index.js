'use strict';Object.defineProperty(exports,'__esModule',{value:true});var React=require('react'),styled=require('styled-components'),framerMotion=require('framer-motion'),ReactDOM=require('react-dom');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var React__default=/*#__PURE__*/_interopDefaultLegacy(React);var styled__default=/*#__PURE__*/_interopDefaultLegacy(styled);var ReactDOM__default=/*#__PURE__*/_interopDefaultLegacy(ReactDOM);var LightTheme = {
    colors: {
        primary: { principal: '#1eca57', contrast: '#FFFFFF' },
        secondary: { principal: '#000000', contrast: '#FFFFFF' },
        danger: { principal: '#D40000', contrast: '#000000' },
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
            fontSize: '1.2rem',
            fontWeight: 400,
            textAlign: 'left',
            fontFamily: "'Ubuntu Mono', monospace",
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
};var DarkTheme = {
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
            fontSize: '1.2rem',
            fontWeight: 400,
            textAlign: 'left',
            fontFamily: "'Ubuntu Mono', monospace",
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
};var GlobalTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? LightTheme : DarkTheme;
var setGlobalTheme = function (theme) {
    GlobalTheme = theme;
};
var getGlobalTheme = function () {
    return GlobalTheme;
};var AccountSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" })));
var AccountCircleSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" })));
var AccountCogSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M17 12C16.87 12 16.76 12.09 16.74 12.21L16.55 13.53C16.25 13.66 15.96 13.82 15.7 14L14.46 13.5C14.35 13.5 14.22 13.5 14.15 13.63L13.15 15.36C13.09 15.47 13.11 15.6 13.21 15.68L14.27 16.5C14.25 16.67 14.24 16.83 14.24 17C14.24 17.17 14.25 17.33 14.27 17.5L13.21 18.32C13.12 18.4 13.09 18.53 13.15 18.64L14.15 20.37C14.21 20.5 14.34 20.5 14.46 20.5L15.7 20C15.96 20.18 16.24 20.35 16.55 20.47L16.74 21.79C16.76 21.91 16.86 22 17 22H19C19.11 22 19.22 21.91 19.24 21.79L19.43 20.47C19.73 20.34 20 20.18 20.27 20L21.5 20.5C21.63 20.5 21.76 20.5 21.83 20.37L22.83 18.64C22.89 18.53 22.86 18.4 22.77 18.32L21.7 17.5C21.72 17.33 21.74 17.17 21.74 17C21.74 16.83 21.73 16.67 21.7 16.5L22.76 15.68C22.85 15.6 22.88 15.47 22.82 15.36L21.82 13.63C21.76 13.5 21.63 13.5 21.5 13.5L20.27 14C20 13.82 19.73 13.65 19.42 13.53L19.23 12.21C19.22 12.09 19.11 12 19 12H17M10 14C5.58 14 2 15.79 2 18V20H11.68A7 7 0 0 1 11 17A7 7 0 0 1 11.64 14.09C11.11 14.03 10.56 14 10 14M18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5C17.16 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5Z" })));
var AccountGroupSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" })));
var AccountPlusSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" })));
var AccountTieSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,3A4,4 0 0,1 16,7A4,4 0 0,1 12,11A4,4 0 0,1 8,7A4,4 0 0,1 12,3M16,13.54C16,14.6 15.72,17.07 13.81,19.83L13,15L13.94,13.12C13.32,13.05 12.67,13 12,13C11.33,13 10.68,13.05 10.06,13.12L11,15L10.19,19.83C8.28,17.07 8,14.6 8,13.54C5.61,14.24 4,15.5 4,17V21H10L11.09,21H12.91L14,21H20V17C20,15.5 18.4,14.24 16,13.54Z" })));
var AccountWorkerSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" })));
var AlertSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" })));
var AlertDecagramSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M13,17H11V15H13V17M13,13H11V7H13V13Z" })));
var AtSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" })));
var CancelSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z" })));
var CalendarSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" })));
var CashUsdSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14A1,1 0 0,0 15,15V12A1,1 0 0,0 14,11H11V10H15V8H13V7H11V8H10A1,1 0 0,0 9,9V12A1,1 0 0,0 10,13H13V14H9V16H11V17Z" })));
var CashPlusSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M15 15V17H18V20H20V17H23V15H20V12H18V15M14.97 11.61C14.85 10.28 13.59 8.97 12 9C10.3 9.03 9 10.3 9 12C9 13.7 10.3 14.94 12 15C12.38 15 12.77 14.92 13.14 14.77C13.41 13.67 13.86 12.63 14.97 11.61M13 16H7C7 14.9 6.11 14 5 14V10C6.11 10 7 9.11 7 8H17C17 9.11 17.9 10 19 10V10.06C19.67 10.06 20.34 10.18 21 10.4V6H3V18H13.32C13.1 17.33 13 16.66 13 16Z" })));
var CheckSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })));
var ChevronDoubleDownSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z" })));
var ChevronDoubleLeftSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" })));
var ChevronDoubleRightSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" })));
var ChevronDoubleUpSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z" })));
var ChevronDownSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" })));
var ChevronLeftSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" })));
var ChevronRightSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })));
var ChevronUpSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" })));
var ClockSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" })));
var ClockCheckSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M13.1 19.9C12.7 20 12.4 20 12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12C20 12.4 20 12.7 19.9 13.1C20.6 13.2 21.2 13.4 21.8 13.7C21.9 13.1 22 12.6 22 12C22 6.5 17.5 2 12 2S2 6.5 2 12C2 17.5 6.5 22 12 22C12.6 22 13.2 21.9 13.7 21.8C13.4 21.3 13.2 20.6 13.1 19.9M15.6 14.1L12.5 12.3V7H11V13L14.5 15.1C14.8 14.7 15.2 14.4 15.6 14.1Z" })));
var CloseSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })));
var CloudSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" })));
var CloudAlertSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19,20H6C2.71,20 0,17.29 0,14C0,10.9 2.34,8.36 5.35,8.03C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.03C21.95,10.22 24,12.36 24,15C24,17.74 21.74,20 19,20M11,15V17H13V15H11M11,13H13V8H11V13Z" })));
var CloudRefreshSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12 4C15.64 4 18.67 6.59 19.35 10.04C21.95 10.22 24 12.36 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4M17 13V9L16 10C15.09 8.79 13.64 8 12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.05 18 15.81 16.77 16.58 15H14.24C13.69 15.61 12.89 16 12 16C10.34 16 9 14.66 9 13C9 11.34 10.34 10 12 10C13.09 10 14.04 10.58 14.56 11.44L13 13H17Z" })));
var CloudSyncSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19 12V13.5C21.21 13.5 23 15.29 23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L16.72 14.22C16.78 14.17 16.85 14.13 19 12M19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5L21.25 20.75L21.28 20.78C21.22 20.83 21.15 20.87 19 23M13 17.5C13 13.91 15.91 11 19.5 11C20.78 11 21.97 11.38 23 12C22.13 10.9 20.84 10.14 19.35 10.03C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.03C2.34 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H13.5C13.18 19.23 13 18.39 13 17.5Z" })));
var CogSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" })));
var DesktopSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" })));
var DesktopTowerSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M8,2H16A2,2 0 0,1 18,4V20A2,2 0 0,1 16,22H8A2,2 0 0,1 6,20V4A2,2 0 0,1 8,2M8,4V6H16V4H8M16,8H8V10H16V8M16,18H14V20H16V18Z" })));
var DownloadSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" })));
var DotsVerticalSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" })));
var EmailSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" })));
var ExitSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M13.34,8.17C12.41,8.17 11.65,7.4 11.65,6.47A1.69,1.69 0 0,1 13.34,4.78C14.28,4.78 15.04,5.54 15.04,6.47C15.04,7.4 14.28,8.17 13.34,8.17M10.3,19.93L4.37,18.75L4.71,17.05L8.86,17.9L10.21,11.04L8.69,11.64V14.5H7V10.54L11.4,8.67L12.07,8.59C12.67,8.59 13.17,8.93 13.5,9.44L14.36,10.79C15.04,12 16.39,12.82 18,12.82V14.5C16.14,14.5 14.44,13.67 13.34,12.4L12.84,14.94L14.61,16.63V23H12.92V17.9L11.14,16.21L10.3,19.93M21,23H19V3H6V16.11L4,15.69V1H21V23M6,23H4V19.78L6,20.2V23Z" })));
var EyeSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" })));
var EyeOffSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" })));
var FileSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z" })));
var FileCompareSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M10,18H6V16H10V18M10,14H6V12H10V14M10,1V2H6C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V23H12V1H10M20,8V20C20,21.11 19.11,22 18,22H14V20H18V11H14V9H18.5L14,4.5V2L20,8M16,14H14V12H16V14M16,18H14V16H16V18Z" })));
var FileDownloadSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M14,2H6C4.89,2 4,2.89 4,4V20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20V8L14,2M12,19L8,15H10.5V12H13.5V15H16L12,19M13,9V3.5L18.5,9H13Z" })));
var FileReplaceSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M14,12H19.5L14,6.5V12M8,5H15L21,11V21A2,2 0 0,1 19,23H8C6.89,23 6,22.1 6,21V18H11V20L15,17L11,14V16H6V7A2,2 0 0,1 8,5M13.5,3H4V16H6V18H4A2,2 0 0,1 2,16V3A2,2 0 0,1 4,1H11.5L13.5,3Z" })));
var FileSearchSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H13C12.59,21.75 12.2,21.44 11.86,21.1C9.22,18.67 9.05,14.56 11.5,11.92C13.69,9.5 17.33,9.13 20,11V8L14,2M13,9V3.5L18.5,9H13M20.31,18.9C21.64,16.79 21,14 18.91,12.68C16.8,11.35 14,12 12.69,14.08C11.35,16.19 12,18.97 14.09,20.3C15.55,21.23 17.41,21.23 18.88,20.32L22,23.39L23.39,22L20.31,18.9M16.5,19A2.5,2.5 0 0,1 14,16.5A2.5,2.5 0 0,1 16.5,14A2.5,2.5 0 0,1 19,16.5A2.5,2.5 0 0,1 16.5,19Z" })));
var FilterSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" })));
var FilterPlusSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.87V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M15 17H18V14H20V17H23V19H20V22H18V19H15V17Z" })));
var FilterRemoveSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M14.76,20.83L17.6,18L14.76,15.17L16.17,13.76L19,16.57L21.83,13.76L23.24,15.17L20.43,18L23.24,20.83L21.83,22.24L19,19.4L16.17,22.24L14.76,20.83M12,12V19.88C12.04,20.18 11.94,20.5 11.71,20.71C11.32,21.1 10.69,21.1 10.3,20.71L8.29,18.7C8.06,18.47 7.96,18.16 8,17.87V12H7.97L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L12.03,12H12Z" })));
var FingerprintSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M17.81,4.47C17.73,4.47 17.65,4.45 17.58,4.41C15.66,3.42 14,3 12,3C10.03,3 8.15,3.47 6.44,4.41C6.2,4.54 5.9,4.45 5.76,4.21C5.63,3.97 5.72,3.66 5.96,3.53C7.82,2.5 9.86,2 12,2C14.14,2 16,2.47 18.04,3.5C18.29,3.65 18.38,3.95 18.25,4.19C18.16,4.37 18,4.47 17.81,4.47M3.5,9.72C3.4,9.72 3.3,9.69 3.21,9.63C3,9.47 2.93,9.16 3.09,8.93C4.08,7.53 5.34,6.43 6.84,5.66C10,4.04 14,4.03 17.15,5.65C18.65,6.42 19.91,7.5 20.9,8.9C21.06,9.12 21,9.44 20.78,9.6C20.55,9.76 20.24,9.71 20.08,9.5C19.18,8.22 18.04,7.23 16.69,6.54C13.82,5.07 10.15,5.07 7.29,6.55C5.93,7.25 4.79,8.25 3.89,9.5C3.81,9.65 3.66,9.72 3.5,9.72M9.75,21.79C9.62,21.79 9.5,21.74 9.4,21.64C8.53,20.77 8.06,20.21 7.39,19C6.7,17.77 6.34,16.27 6.34,14.66C6.34,11.69 8.88,9.27 12,9.27C15.12,9.27 17.66,11.69 17.66,14.66A0.5,0.5 0 0,1 17.16,15.16A0.5,0.5 0 0,1 16.66,14.66C16.66,12.24 14.57,10.27 12,10.27C9.43,10.27 7.34,12.24 7.34,14.66C7.34,16.1 7.66,17.43 8.27,18.5C8.91,19.66 9.35,20.15 10.12,20.93C10.31,21.13 10.31,21.44 10.12,21.64C10,21.74 9.88,21.79 9.75,21.79M16.92,19.94C15.73,19.94 14.68,19.64 13.82,19.05C12.33,18.04 11.44,16.4 11.44,14.66A0.5,0.5 0 0,1 11.94,14.16A0.5,0.5 0 0,1 12.44,14.66C12.44,16.07 13.16,17.4 14.38,18.22C15.09,18.7 15.92,18.93 16.92,18.93C17.16,18.93 17.56,18.9 17.96,18.83C18.23,18.78 18.5,18.96 18.54,19.24C18.59,19.5 18.41,19.77 18.13,19.82C17.56,19.93 17.06,19.94 16.92,19.94M14.91,22C14.87,22 14.82,22 14.78,22C13.19,21.54 12.15,20.95 11.06,19.88C9.66,18.5 8.89,16.64 8.89,14.66C8.89,13.04 10.27,11.72 11.97,11.72C13.67,11.72 15.05,13.04 15.05,14.66C15.05,15.73 16,16.6 17.13,16.6C18.28,16.6 19.21,15.73 19.21,14.66C19.21,10.89 15.96,7.83 11.96,7.83C9.12,7.83 6.5,9.41 5.35,11.86C4.96,12.67 4.76,13.62 4.76,14.66C4.76,15.44 4.83,16.67 5.43,18.27C5.53,18.53 5.4,18.82 5.14,18.91C4.88,19 4.59,18.87 4.5,18.62C4,17.31 3.77,16 3.77,14.66C3.77,13.46 4,12.37 4.45,11.42C5.78,8.63 8.73,6.82 11.96,6.82C16.5,6.82 20.21,10.33 20.21,14.65C20.21,16.27 18.83,17.59 17.13,17.59C15.43,17.59 14.05,16.27 14.05,14.65C14.05,13.58 13.12,12.71 11.97,12.71C10.82,12.71 9.89,13.58 9.89,14.65C9.89,16.36 10.55,17.96 11.76,19.16C12.71,20.1 13.62,20.62 15.03,21C15.3,21.08 15.45,21.36 15.38,21.62C15.33,21.85 15.12,22 14.91,22Z" })));
var GestureTapSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z" })));
var HammerWrenchSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z" })));
var KeySVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14M12.65,10C11.83,7.67 9.61,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z" })));
var KeyChangeSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M6.5,2C8.46,2 10.13,3.25 10.74,5H22V8H18V11H15V8H10.74C10.13,9.75 8.46,11 6.5,11C4,11 2,9 2,6.5C2,4 4,2 6.5,2M6.5,5A1.5,1.5 0 0,0 5,6.5A1.5,1.5 0 0,0 6.5,8A1.5,1.5 0 0,0 8,6.5A1.5,1.5 0 0,0 6.5,5M6.5,13C8.46,13 10.13,14.25 10.74,16H22V19H20V22H18V19H16V22H13V19H10.74C10.13,20.75 8.46,22 6.5,22C4,22 2,20 2,17.5C2,15 4,13 6.5,13M6.5,16A1.5,1.5 0 0,0 5,17.5A1.5,1.5 0 0,0 6.5,19A1.5,1.5 0 0,0 8,17.5A1.5,1.5 0 0,0 6.5,16Z" })));
var LicenseSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M9 10A3.04 3.04 0 0 1 12 7A3.04 3.04 0 0 1 15 10A3.04 3.04 0 0 1 12 13A3.04 3.04 0 0 1 9 10M12 19L16 20V16.92A7.54 7.54 0 0 1 12 18A7.54 7.54 0 0 1 8 16.92V20M12 4A5.78 5.78 0 0 0 7.76 5.74A5.78 5.78 0 0 0 6 10A5.78 5.78 0 0 0 7.76 14.23A5.78 5.78 0 0 0 12 16A5.78 5.78 0 0 0 16.24 14.23A5.78 5.78 0 0 0 18 10A5.78 5.78 0 0 0 16.24 5.74A5.78 5.78 0 0 0 12 4M20 10A8.04 8.04 0 0 1 19.43 12.8A7.84 7.84 0 0 1 18 15.28V23L12 21L6 23V15.28A7.9 7.9 0 0 1 4 10A7.68 7.68 0 0 1 6.33 4.36A7.73 7.73 0 0 1 12 2A7.73 7.73 0 0 1 17.67 4.36A7.68 7.68 0 0 1 20 10Z" })));
var LinuxSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M14.62,8.35C14.2,8.63 12.87,9.39 12.67,9.54C12.28,9.85 11.92,9.83 11.53,9.53C11.33,9.37 10,8.61 9.58,8.34C9.1,8.03 9.13,7.64 9.66,7.42C11.3,6.73 12.94,6.78 14.57,7.45C15.06,7.66 15.08,8.05 14.62,8.35M21.84,15.63C20.91,13.54 19.64,11.64 18,9.97C17.47,9.42 17.14,8.8 16.94,8.09C16.84,7.76 16.77,7.42 16.7,7.08C16.5,6.2 16.41,5.3 16,4.47C15.27,2.89 14,2.07 12.16,2C10.35,2.05 9,2.81 8.21,4.4C8,4.83 7.85,5.28 7.75,5.74C7.58,6.5 7.43,7.29 7.25,8.06C7.1,8.71 6.8,9.27 6.29,9.77C4.68,11.34 3.39,13.14 2.41,15.12C2.27,15.41 2.13,15.7 2.04,16C1.85,16.66 2.33,17.12 3.03,16.96C3.47,16.87 3.91,16.78 4.33,16.65C4.74,16.5 4.9,16.6 5,17C5.65,19.15 7.07,20.66 9.24,21.5C13.36,23.06 18.17,20.84 19.21,16.92C19.28,16.65 19.38,16.55 19.68,16.65C20.14,16.79 20.61,16.89 21.08,17C21.57,17.09 21.93,16.84 22,16.36C22.03,16.1 21.94,15.87 21.84,15.63" })));
var ListSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9" })));
var ListCheckSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M14,10H2V12H14V10M14,6H2V8H14V6M2,16H10V14H2V16M21.5,11.5L23,13L16,20L11.5,15.5L13,14L16,17L21.5,11.5Z" })));
var ListSelectSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" })));
var MagnifySVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" })));
var MapMarkerSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" })));
var MinusSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19,13H5V11H19V13Z" })));
var MicrosoftWindowsSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" })));
var MoonSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" })));
var PackageVariantSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" })));
var PencilSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" })));
var PlusSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" })));
var PrinterSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" })));
var VideoSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" })));
var SelectGroupSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M5 3A2 2 0 0 0 3 5H5M7 3V5H9V3M11 3V5H13V3M15 3V5H17V3M19 3V5H21A2 2 0 0 0 19 3M3 7V9H5V7M7 7V11H11V7M13 7V11H17V7M19 7V9H21V7M3 11V13H5V11M19 11V13H21V11M7 13V17H11V13M13 13V17H17V13M3 15V17H5V15M19 15V17H21V15M3 19A2 2 0 0 0 5 21V19M7 19V21H9V19M11 19V21H13V19M15 19V21H17V19M19 19V21A2 2 0 0 0 21 19Z" })));
var SelectionSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M11.2 4C9.94 4.12 8.72 4.53 7.64 5.2L6.64 3.47C7.95 2.64 9.45 2.13 11 2M17.53 6.25C16.62 5.39 15.53 4.73 14.34 4.33L15 2.39C16.5 2.84 17.89 3.66 19 4.78M5.34 7.41C4.64 8.44 4.19 9.6 4 10.83L2 10.55C2.2 9 2.79 7.5 3.7 6.23M22 12V12.66L20 12.5V12C20 10.92 19.81 9.86 19.39 8.86L21.22 8.06C21.75 9.31 22 10.65 22 12M6 17.3L4.5 18.61C3.47 17.43 2.72 16.04 2.3 14.53L4.17 14C4.53 15.22 5.16 16.35 6 17.3M12.14 22H12C10.5 22 9 21.68 7.64 21.07L8.53 19.24C9.62 19.75 10.8 20 12 20H12.19M17 21H15V15H21V17H18.42L21.14 19.76L19.73 21.17L17 18.5" })));
var ShapePlusSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M2,2H11V11H2V2M17.5,2C20,2 22,4 22,6.5C22,9 20,11 17.5,11C15,11 13,9 13,6.5C13,4 15,2 17.5,2M6.5,14L11,22H2L6.5,14M19,17H22V19H19V22H17V19H14V17H17V14H19V17Z" })));
var SunSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z" })));
var RefreshSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" })));
var TrashSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" })));
var WarehouseSVG = (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "24", height: "24", viewBox: "0 0 24 24" },
    React__default['default'].createElement("path", { d: "M6 19H8V21H6V19M12 3L2 8V21H4V13H20V21H22V8L12 3M8 11H4V9H8V11M14 11H10V9H14V11M20 11H16V9H20V11M6 15H8V17H6V15M10 15H12V17H10V15M10 19H12V21H10V19M14 19H16V21H14V19Z" })));
var Icons = {
    account: AccountSVG,
    accountCircle: AccountCircleSVG,
    accountCog: AccountCogSVG,
    accountGroup: AccountGroupSVG,
    accountPlus: AccountPlusSVG,
    accountTie: AccountTieSVG,
    accountWorker: AccountWorkerSVG,
    alert: AlertSVG,
    alertDecagram: AlertDecagramSVG,
    at: AtSVG,
    calendar: CalendarSVG,
    cancel: CancelSVG,
    cashUsd: CashUsdSVG,
    cashPlus: CashPlusSVG,
    check: CheckSVG,
    chevronDoubleDown: ChevronDoubleDownSVG,
    chevronDoubleLeft: ChevronDoubleLeftSVG,
    chevronDoubleRight: ChevronDoubleRightSVG,
    chevronDoubleUp: ChevronDoubleUpSVG,
    chevronDown: ChevronDownSVG,
    chevronLeft: ChevronLeftSVG,
    chevronRight: ChevronRightSVG,
    chevronUp: ChevronUpSVG,
    clock: ClockSVG,
    clockCheck: ClockCheckSVG,
    close: CloseSVG,
    cloud: CloudSVG,
    cloudAlert: CloudAlertSVG,
    cloudRefresh: CloudRefreshSVG,
    cloudSync: CloudSyncSVG,
    cog: CogSVG,
    desktop: DesktopSVG,
    desktopTower: DesktopTowerSVG,
    download: DownloadSVG,
    dotsVertical: DotsVerticalSVG,
    email: EmailSVG,
    exit: ExitSVG,
    eye: EyeSVG,
    eyeOff: EyeOffSVG,
    file: FileSVG,
    fileCompare: FileCompareSVG,
    fileDownload: FileDownloadSVG,
    fileReplace: FileReplaceSVG,
    fileSearch: FileSearchSVG,
    filter: FilterSVG,
    filterPlus: FilterPlusSVG,
    filterRemove: FilterRemoveSVG,
    fingerprint: FingerprintSVG,
    gestureTap: GestureTapSVG,
    hammerWrench: HammerWrenchSVG,
    key: KeySVG,
    keyChange: KeyChangeSVG,
    license: LicenseSVG,
    linux: LinuxSVG,
    list: ListSVG,
    listCheck: ListCheckSVG,
    listSelect: ListSelectSVG,
    magnify: MagnifySVG,
    mapMarker: MapMarkerSVG,
    microsoftWindows: MicrosoftWindowsSVG,
    minus: MinusSVG,
    moon: MoonSVG,
    packageVariant: PackageVariantSVG,
    pencil: PencilSVG,
    plus: PlusSVG,
    printer: PrinterSVG,
    selectGroup: SelectGroupSVG,
    selection: SelectionSVG,
    shapePlus: ShapePlusSVG,
    sun: SunSVG,
    refresh: RefreshSVG,
    trash: TrashSVG,
    video: VideoSVG,
    warehouse: WarehouseSVG,
};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}var GlobalStyle = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    * {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        list-style: none;\n        text-decoration: none;\n        box-sizing: border-box;\n    }\n    html, body, #root {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n\n        background-color: ", ";\n        color: ", ";\n\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n    }\n    h1 {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n        \n        color: ", ";\n        margin: 1rem 0;\n    }\n    h2 {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n    }\n    p {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n        padding: 0.5rem 3rem;\n    }\n"], ["\n    * {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        list-style: none;\n        text-decoration: none;\n        box-sizing: border-box;\n    }\n    html, body, #root {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n\n        background-color: ", ";\n        color: ", ";\n\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n    }\n    h1 {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n        \n        color: ", ";\n        margin: 1rem 0;\n    }\n    h2 {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n    }\n    p {\n        font-size: ", ";\n        font-weight: ", ";\n        line-height: ", ";\n        text-align: ", ";\n        font-family: ", ";\n        padding: 0.5rem 3rem;\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary.principal;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.body.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.body.fontWeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.body.lineHeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.body.textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.body.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h1.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h1.fontWeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h1.lineHeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h1.textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h1.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary.principal;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h2.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h2.fontWeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h2.lineHeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h2.textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.h2.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.p.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.p.fontWeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.p.lineHeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.p.textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.p.fontFamily;
});
var templateObject_1;var createClassName = function (name, currentClassName) {
    var prefix = 'kumi-';
    var separator = '-';
    return "" + prefix + name.join(separator) + (currentClassName ? " " + currentClassName : '');
};
var getColorOrDefault = function (theme, color, invert, opacity) {
    if (color === void 0) { color = 'primary'; }
    if (invert === void 0) { invert = false; }
    if (opacity === void 0) { opacity = 1; }
    if (opacity >= 1)
        opacity = 1;
    else if (opacity <= 0)
        opacity = 0;
    var opacityHex = Math.round(255 * opacity).toString(16);
    return theme.colors[color][invert ? 'contrast' : 'principal'] + (opacity === 1 ? '' : opacityHex);
};var IconElement = styled__default['default'](framerMotion.motion.div)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    flex-shrink: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n    path {\n        fill: ", ";\n    }\n"], ["\n    width: ", ";\n    height: ", ";\n    flex-shrink: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n        width: 100%;\n        height: 100%;\n    }\n    path {\n        fill: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme, width = _a.width;
    return width || theme.defaultIconSize;
}, function (_a) {
    var theme = _a.theme, height = _a.height;
    return height || theme.defaultIconSize;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
});
var templateObject_1$1;var Icon = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (React__default['default'].createElement(IconElement, __assign({}, props, { className: createClassName(['icon'], className), role: "icon" }), Icons[props.name]));
};var SolidButtonElement = styled__default['default'](framerMotion.motion.button)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", ";\n    margin: 3px;\n    padding: 15px 30px;\n    box-shadow: ", ";\n    outline: none;\n\n    transition: ", ";\n\n    span {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        font-weight: ", ";\n        text-align: ", ";\n        line-height: ", ";\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n\n    :active {\n        transform: scale(0.97);\n    }\n\n    :disabled {\n        box-shadow: none;\n        opacity: 0.3;\n\n        :active,\n        :hover {\n            cursor: default;\n            transform: none;\n        }\n    }\n\n    .kumi-icon {\n        margin-right: 10px;\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", ";\n    margin: 3px;\n    padding: 15px 30px;\n    box-shadow: ", ";\n    outline: none;\n\n    transition: ", ";\n\n    span {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        font-weight: ", ";\n        text-align: ", ";\n        line-height: ", ";\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n\n    :active {\n        transform: scale(0.97);\n    }\n\n    :disabled {\n        box-shadow: none;\n        opacity: 0.3;\n\n        :active,\n        :hover {\n            cursor: default;\n            transform: none;\n        }\n    }\n\n    .kumi-icon {\n        margin-right: 10px;\n    }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.boxShadow.normal;
}, function (_a) {
    var theme = _a.theme;
    return theme.transitions.fast;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, !invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.fontWeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.lineHeight;
});
var OutlineButtonElement = styled__default['default'](framerMotion.motion.button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n    border: solid 2px ", ";\n    border-radius: ", ";\n    margin: 3px;\n    padding: 15px 30px;\n    outline: none;\n\n    transition: ", ";\n\n    span {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        font-weight: ", ";\n        text-align: ", ";\n        line-height: ", ";\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n\n    :active {\n        background-color: ", ";\n    }\n\n    :disabled {\n        opacity: 0.3;\n\n        :active,\n        :hover {\n            cursor: default;\n            transform: none;\n            background-color: transparent;\n        }\n    }\n\n    .kumi-icon {\n        margin-right: 10px;\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: transparent;\n    border: solid 2px ", ";\n    border-radius: ", ";\n    margin: 3px;\n    padding: 15px 30px;\n    outline: none;\n\n    transition: ", ";\n\n    span {\n        color: ", ";\n        font-size: ", ";\n        font-family: ", ";\n        font-weight: ", ";\n        text-align: ", ";\n        line-height: ", ";\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n\n    :active {\n        background-color: ", ";\n    }\n\n    :disabled {\n        opacity: 0.3;\n\n        :active,\n        :hover {\n            cursor: default;\n            transform: none;\n            background-color: transparent;\n        }\n    }\n\n    .kumi-icon {\n        margin-right: 10px;\n    }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.transitions.fast;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.fontWeight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.lineHeight;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
});
var IconButtonElement = styled__default['default'](framerMotion.motion.button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: transparent;\n    border-radius: ", ";\n    margin: 3px;\n    padding: 15px;\n    outline: none;\n\n    transition: ", ";\n\n    span {\n        margin-top: 0.3rem;\n        color: ", ";\n        font-size: 0.6rem;\n        font-family: ", ";\n        font-weight: 100;\n        text-align: center;\n        line-height: 1;\n        text-transform: uppercase;\n        max-width: calc(2 * ", ");\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n\n    :active {\n        background-color: ", ";\n    }\n\n    :disabled {\n        opacity: 0.3;\n\n        :active,\n        :hover {\n            cursor: default;\n            transform: none;\n            background-color: transparent;\n        }\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: transparent;\n    border-radius: ", ";\n    margin: 3px;\n    padding: 15px;\n    outline: none;\n\n    transition: ", ";\n\n    span {\n        margin-top: 0.3rem;\n        color: ", ";\n        font-size: 0.6rem;\n        font-family: ", ";\n        font-weight: 100;\n        text-align: center;\n        line-height: 1;\n        text-transform: uppercase;\n        max-width: calc(2 * ", ");\n    }\n\n    :hover {\n        cursor: pointer;\n    }\n\n    :active {\n        background-color: ", ";\n    }\n\n    :disabled {\n        opacity: 0.3;\n\n        :active,\n        :hover {\n            cursor: default;\n            transform: none;\n            background-color: transparent;\n        }\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.transitions.fast;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.font.button.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.defaultIconSize;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
});
var templateObject_1$2, templateObject_2, templateObject_3;var Button = function (_a) {
    var _b = _a.styleType, styleType = _b === void 0 ? 'solid' : _b, icon = _a.icon, _c = _a.iconSize, iconSize = _c === void 0 ? '25px' : _c, children = _a.children, className = _a.className, props = __rest(_a, ["styleType", "icon", "iconSize", "children", "className"]);
    switch (styleType) {
        case 'icon':
            return (React__default['default'].createElement(IconButtonElement, __assign({ iconSize: iconSize }, props, { className: createClassName(['button', 'icon'], className) }),
                icon && (React__default['default'].createElement(Icon, { name: icon, width: iconSize, height: iconSize, invert: props.invert, color: props.color })),
                children && React__default['default'].createElement("span", { role: "text" }, children)));
        case 'outline':
            return (React__default['default'].createElement(OutlineButtonElement, __assign({}, props, { className: createClassName(['button', 'outline'], className) }),
                icon && (React__default['default'].createElement(Icon, { name: icon, width: iconSize, height: iconSize, invert: props.invert, color: props.color })),
                children && React__default['default'].createElement("span", { role: "text" }, children)));
        default:
            return (React__default['default'].createElement(SolidButtonElement, __assign({}, props, { className: createClassName(['button', 'solid'], className) }),
                icon && (React__default['default'].createElement(Icon, { name: icon, width: iconSize, height: iconSize, invert: !props.invert, color: props.color })),
                children && React__default['default'].createElement("span", { role: "text" }, children)));
    }
};var InputElement = styled__default['default'](framerMotion.motion.input)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    transition: all ", ";\n    background-color: transparent;\n    flex: 1;\n    height: 100%;\n    padding: 10px 5px 0 5px;\n\n    outline: none;\n\n    font-family: ", ";\n    font-size: ", ";\n    color: ", ";\n\n    &:focus {\n        color: ", ";\n    }\n\n    &::placeholder {\n        color: ", ";\n    }\n"], ["\n    transition: all ", ";\n    background-color: transparent;\n    flex: 1;\n    height: 100%;\n    padding: 10px 5px 0 5px;\n\n    outline: none;\n\n    font-family: ", ";\n    font-size: ", ";\n    color: ", ";\n\n    &:focus {\n        color: ", ";\n    }\n\n    &::placeholder {\n        color: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.transitions.fast;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.input.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.input.fontSize;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
});
var templateObject_1$3;var FormFieldContainer = styled__default['default'](framerMotion.motion.div)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    position: relative;\n    min-width: 300px;\n    height: 50px;\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    transition: all ", ";\n\n    .", " {\n        margin: 5px 0;\n\n        path {\n            transition: all ", ";\n            fill: ", ";\n        }\n    }\n\n    &:focus-within {\n        .", " {\n            margin: 5px 0;\n\n            path {\n                fill: ", ";\n            }\n        }\n    }\n"], ["\n    position: relative;\n    min-width: 300px;\n    height: 50px;\n    margin: 5px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    transition: all ", ";\n\n    .", " {\n        margin: 5px 0;\n\n        path {\n            transition: all ", ";\n            fill: ", ";\n        }\n    }\n\n    &:focus-within {\n        .", " {\n            margin: 5px 0;\n\n            path {\n                fill: ", ";\n            }\n        }\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.transitions.fast;
}, createClassName(['icon']), function (_a) {
    var theme = _a.theme;
    return theme.transitions.fast;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, createClassName(['icon']), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
});
var DownlineFormFieldContainer = styled__default['default'](FormFieldContainer)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    background-color: transparent;\n    border-bottom: 1px solid ", ";\n    color: ", ";\n    &:focus-within {\n        color: ", ";\n        border-bottom: 2px solid ", ";\n    }\n"], ["\n    background-color: transparent;\n    border-bottom: 1px solid ", ";\n    color: ", ";\n    &:focus-within {\n        color: ", ";\n        border-bottom: 2px solid ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
});
var OutlineFormFieldContainer = styled__default['default'](FormFieldContainer)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    padding: 0 5px;\n    background-color: transparent;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    color: ", ";\n\n    &:focus-within {\n        border: 2px solid ", ";\n\n        color: ", ";\n\n        ::placeholder {\n            color: ", ";\n        }\n    }\n"], ["\n    padding: 0 5px;\n    background-color: transparent;\n    border: 1px solid ", ";\n    border-radius: ", ";\n    color: ", ";\n\n    &:focus-within {\n        border: 2px solid ", ";\n\n        color: ", ";\n\n        ::placeholder {\n            color: ", ";\n        }\n    }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
});
var SolidFormFieldContainer = styled__default['default'](FormFieldContainer)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 0 5px;\n    background-color: ", ";\n\n    border-radius: ", ";\n    color: ", ";\n\n    &:focus-within {\n        background-color: ", ";\n\n        color: ", ";\n\n        ::placeholder {\n            color: ", ";\n        }\n    }\n"], ["\n    padding: 0 5px;\n    background-color: ", ";\n\n    border-radius: ", ";\n    color: ", ";\n\n    &:focus-within {\n        background-color: ", ";\n\n        color: ", ";\n\n        ::placeholder {\n            color: ", ";\n        }\n    }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.15);
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
});
var FormFieldLabelElement = styled__default['default'].label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    text-align: center;\n    text-transform: uppercase;\n    top: 3px;\n    left: 0;\n    right: 0;\n    font-size: 0.8rem;\n    font-family: ", ";\n"], ["\n    position: absolute;\n    text-align: center;\n    text-transform: uppercase;\n    top: 3px;\n    left: 0;\n    right: 0;\n    font-size: 0.8rem;\n    font-family: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.font.input.fontFamily;
});
var templateObject_1$4, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5;var FormField = React__default['default'].forwardRef(function (props, ref) {
    return (React__default['default'].createElement(FormFieldContainer, __assign({}, props, { ref: ref, className: createClassName(['form', 'field'], props === null || props === void 0 ? void 0 : props.className), role: "form-field-container" })));
});
var DownlineFormField = React__default['default'].forwardRef(function (props, ref) {
    return (React__default['default'].createElement(DownlineFormFieldContainer, __assign({}, props, { ref: ref, className: createClassName(['form', 'field', 'downline'], props === null || props === void 0 ? void 0 : props.className), role: "form-field-container" })));
});
var OutlineFormField = React__default['default'].forwardRef(function (props, ref) {
    return (React__default['default'].createElement(OutlineFormFieldContainer, __assign({}, props, { ref: ref, className: createClassName(['form', 'field', 'outline'], props === null || props === void 0 ? void 0 : props.className), role: "form-field-container" })));
});
var SolidFormField = React__default['default'].forwardRef(function (props, ref) {
    return (React__default['default'].createElement(SolidFormFieldContainer, __assign({}, props, { ref: ref, className: createClassName(['form', 'field', 'solid'], props === null || props === void 0 ? void 0 : props.className), role: "form-field-container" })));
});
var FormFieldLabel = React__default['default'].forwardRef(function (props, ref) {
    return (React__default['default'].createElement(FormFieldLabelElement, __assign({}, props, { ref: ref, className: createClassName(['from', 'field', 'label']), role: "form-field-label" })));
});var Input = function (_a) {
    var color = _a.color, invert = _a.invert, styleType = _a.styleType, iconLeft = _a.iconLeft, iconRight = _a.iconRight, containerProps = _a.containerProps, label = _a.label, props = __rest(_a, ["color", "invert", "styleType", "iconLeft", "iconRight", "containerProps", "label"]);
    var Container;
    switch (styleType) {
        case 'outline':
            Container = OutlineFormField;
            break;
        case 'solid':
            Container = SolidFormField;
            break;
        default:
            Container = DownlineFormField;
    }
    return (React__default['default'].createElement(Container, __assign({ color: color, invert: invert }, containerProps),
        label && React__default['default'].createElement(FormFieldLabel, null, label),
        iconLeft && React__default['default'].createElement(Icon, { name: iconLeft, color: color, width: "25px", height: "25px" }),
        React__default['default'].createElement(InputElement, __assign({}, props, { color: color, invert: invert })),
        iconRight && React__default['default'].createElement(Icon, { name: iconRight, color: color, width: "25px", height: "25px" })));
};var getSliderIterationByMouse = function (_a, clientX, maxIterations) {
    var width = _a.width, left = _a.left;
    var scale = width / (maxIterations - 1);
    var distance = clientX - left;
    var iteration = Math.round(distance / scale);
    if (iteration < 0)
        return 0;
    if (iteration > maxIterations - 1)
        return maxIterations - 1;
    return iteration;
};
var getSliderRailPercentage = function (iteration, iterations) {
    return (100 * iteration) / (iterations - 1);
};
var getSliderIterationByValue = function (_a, value) {
    var iterations = _a.maxIterations, func = _a.scaleFunction;
    if (!value)
        return 0;
    for (var i = 0; i < iterations; i++) {
        if (func(i) === value)
            return i;
    }
    return 0;
};var SliderContainer = styled__default['default'](FormField)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n    margin-top: 20px;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n\n    background-color: transparent;\n"], ["\n    margin-top: 20px;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n\n    background-color: transparent;\n"])));
var SliderRailElement = styled__default['default'].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n    flex: 1;\n    width: 100%;\n    height: 5px;\n    background-color: ", ";\n    border-radius: ", ";\n"], ["\n    flex: 1;\n    width: 100%;\n    height: 5px;\n    background-color: ", ";\n    border-radius: ", ";\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.15);
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var SliderActivedRailElement = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n    position: absolute;\n    height: 5px;\n\n    background-color: ", ";\n    border-radius: ", ";\n"], ["\n    position: absolute;\n    height: 5px;\n\n    background-color: ", ";\n    border-radius: ", ";\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
});
var SliderTrackerElement = styled__default['default'].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    margin-left: -15px;\n    background-color: ", ";\n    border: 5px solid ", ";\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    outline: none;\n    transition: box-shadow ", ",\n        transform ", ";\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 0 0 0 8px ", ";\n    }\n\n    &[class$='active'] {\n        cursor: pointer;\n        transform: scale(0.9);\n        box-shadow: 0 0 0 16px ", ";\n    }\n\n    label {\n        color: ", ";\n        font-family: ", ";\n        font-weight: bold;\n        font-size: calc(1.5 * ", ");\n        position: absolute;\n        text-align: center;\n        top: -150%;\n    }\n"], ["\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    margin-left: -15px;\n    background-color: ", ";\n    border: 5px solid ", ";\n    border-radius: 50%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    outline: none;\n    transition: box-shadow ", ",\n        transform ", ";\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 0 0 0 8px ", ";\n    }\n\n    &[class$='active'] {\n        cursor: pointer;\n        transform: scale(0.9);\n        box-shadow: 0 0 0 16px ", ";\n    }\n\n    label {\n        color: ", ";\n        font-family: ", ";\n        font-weight: bold;\n        font-size: calc(1.5 * ", ");\n        position: absolute;\n        text-align: center;\n        top: -150%;\n    }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, !invert);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.transitions.average;
}, function (_a) {
    var theme = _a.theme;
    return theme.transitions.fast;
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
}, function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert);
}, function (_a) {
    var theme = _a.theme;
    return theme.font.input.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.input.fontSize;
});
var templateObject_1$5, templateObject_2$2, templateObject_3$2, templateObject_4$1;var SliderActivedRail = function (_a) {
    var from = _a.from, to = _a.to, _b = _a.active, active = _b === void 0 ? false : _b, iterations = _a.iterations;
    return (React__default['default'].createElement(SliderActivedRailElement, { className: createClassName(active ? ['slider', 'rail', 'actived', 'active'] : ['slider', 'rail', 'actived']), style: {
            left: getSliderRailPercentage(from, iterations) + "%",
            width: getSliderRailPercentage(to - from, iterations) + "%",
        }, role: "slider-actived-rail" }));
};var SliderTracker = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.scaleConfig, scaleFunction = _d.scaleFunction, maxIterations = _d.maxIterations;
    return (React__default['default'].createElement(SliderTrackerElement, { className: createClassName(active ? ['slider', 'tracker', 'active'] : ['slider', 'tracker']), role: "slider-tracker", tabIndex: 0, style: { left: getSliderRailPercentage(value, maxIterations) + "%" } },
        React__default['default'].createElement("label", null, scaleFunction(value))));
};var PointSlider = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.activeHail, activeHail = _b === void 0 ? false : _b, scaleConfig = _a.scaleConfig;
    var _c = React.useState(getSliderIterationByValue(scaleConfig, value)), iteration = _c[0], setIteration = _c[1];
    var _d = React.useState(false), isFocused = _d[0], setIsFocused = _d[1];
    var containerRef = React.useRef(null);
    var mouseDownHandler = function (event) {
        event.preventDefault();
        setIteration(getSliderIterationByMouse(event.currentTarget.getBoundingClientRect(), event.clientX, scaleConfig.maxIterations));
        setIsFocused(true);
    };
    var mouseMoveHandler = function (event) {
        console.log(isFocused, containerRef);
        if (!isFocused || !containerRef.current)
            return;
        event.preventDefault();
        setIteration(getSliderIterationByMouse(containerRef.current.getBoundingClientRect(), event instanceof TouchEvent ? event.touches[0].clientX : event.clientX, scaleConfig.maxIterations));
    };
    var stopMovementHandler = function () {
        setIsFocused(false);
    };
    React.useEffect(function () {
        if (!isFocused)
            return;
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('touchmove', mouseMoveHandler);
        window.addEventListener('mouseup', stopMovementHandler);
        window.addEventListener('touchend', stopMovementHandler);
        return function () {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('touchmove', mouseMoveHandler);
            window.removeEventListener('mouseup', stopMovementHandler);
            window.removeEventListener('touchend', stopMovementHandler);
        };
    });
    React.useEffect(function () {
        if (!isFocused) {
            setIteration(getSliderIterationByValue(scaleConfig, value));
        }
    }, [value]);
    React.useEffect(function () {
        if (onChange) {
            onChange(scaleConfig.scaleFunction(iteration));
        }
    }, [iteration]);
    return (React__default['default'].createElement(SliderContainer, { className: createClassName(['slider', 'point', 'container']), role: "container", onMouseDown: mouseDownHandler, ref: containerRef },
        React__default['default'].createElement(SliderRailElement, null),
        activeHail && React__default['default'].createElement(SliderActivedRail, { from: 0, to: iteration, iterations: scaleConfig.maxIterations }),
        React__default['default'].createElement(SliderTracker, { value: iteration, active: isFocused, scaleConfig: scaleConfig })));
};var SliderRail = function () {
    return React__default['default'].createElement(SliderRailElement, { className: createClassName(['slider', 'tracking', 'rail']), role: "slider-rail" });
};var createContainer = function () {
    var element = document.createElement('aside');
    element.style.position = 'fixed';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    return element;
};
var createOverlay = function () {
    var element = document.createElement('aside');
    element.setAttribute('role', 'overlay');
    element.setAttribute('class', createClassName(['overlay']));
    element.style.position = 'fixed';
    element.style.top = '0';
    element.style.right = '0';
    element.style.bottom = '0';
    element.style.left = '0';
    element.style.backgroundColor = getColorOrDefault(getGlobalTheme(), 'primary', true, 0.8);
    return element;
};
var updateContainerFrom = function (container, from) {
    var fromBounding = from.getBoundingClientRect();
    var actualBounding = container.getBoundingClientRect();
    if (actualBounding.width && actualBounding.width > fromBounding.width) {
        var left = fromBounding.left - (actualBounding.width - fromBounding.width) / 2;
        if (left < 10)
            left = 0;
        container.style.left = left + "px";
    }
    else {
        container.style.left = fromBounding.left + "px";
    }
    container.style.top = fromBounding.top + "px";
    container.style.minWidth = fromBounding.width + "px";
    if (actualBounding.right > window.innerWidth - 10)
        container.style.width = window.innerWidth - actualBounding.left - 10 + "px";
    else
        container.style.width = '';
    if (actualBounding.bottom > window.innerHeight - 10)
        container.style.height = window.innerHeight - actualBounding.top - 10 + "px";
    else
        container.style.height = '';
    container.style.transform = '';
    return container;
};
var updateContainerAlone = function (container) {
    container.style.width = '';
    container.style.height = '';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.margin = 'auto';
    return container;
};
var updateContainer = function (container, from) {
    if (from)
        return updateContainerFrom(container, from);
    else
        return updateContainerAlone(container);
};var ModalContainer = styled__default['default'](framerMotion.motion.div)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    background-color: ", ";\n    border-radius: ", ";\n    padding: 30px;\n    box-shadow: ", ";\n\n    .", " {\n        position: absolute;\n        right: 3px;\n        top: 3px;\n        padding: 3px;\n        margin: 0;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    background-color: ", ";\n    border-radius: ", ";\n    padding: 30px;\n    box-shadow: ", ";\n\n    .", " {\n        position: absolute;\n        right: 3px;\n        top: 3px;\n        padding: 3px;\n        margin: 0;\n    }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius;
}, function (_a) {
    var theme = _a.theme;
    return theme.boxShadow.normal;
}, createClassName(['modal', 'close']));
var templateObject_1$6;var Modal = function (_a) {
    var children = _a.children, _b = _a.displayState, display = _b[0], setDisplay = _b[1];
    return (React__default['default'].createElement(ModalContainer, { className: createClassName(['modal']) },
        children,
        React__default['default'].createElement(Button, { styleType: "icon", icon: "close", onClick: function () { return setDisplay(false); }, className: createClassName(['modal', 'close']) })));
};var container = createContainer();
var overlay = createOverlay();
var useAside = function (children, _a) {
    var _b = _a === void 0 ? {
        fromElement: null,
        wrappers: [],
        enableOverlay: true,
    } : _a, _c = _b.fromElement, fromElement = _c === void 0 ? null : _c, _d = _b.wrappers, wrappers = _d === void 0 ? [] : _d, _e = _b.enableOverlay, enableOverlay = _e === void 0 ? true : _e;
    var _f = React.useState(false), display = _f[0], setDisplay = _f[1];
    var _g = React.useState(fromElement), from = _g[0], setFrom = _g[1];
    var wrapChildren = function () {
        return wrappers.reduce(function (previous, current) {
            return React__default['default'].createElement(current, { children: previous, displayState: [display, setDisplay] });
        }, children);
    };
    var appendNode = function () {
        if (enableOverlay) {
            if (document.body.contains(overlay)) {
                document.body.replaceChild(overlay, overlay);
            }
            else {
                document.body.appendChild(overlay);
            }
        }
        if (document.body.contains(container)) {
            document.body.replaceChild(container, container);
        }
        else {
            document.body.appendChild(container);
        }
        // document.body.style.overflow = 'hidden';
    };
    var removeNode = function () {
        if (enableOverlay) {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }
        if (document.body.contains(container)) {
            document.body.removeChild(container);
        }
        // document.body.style.overflow = '';
    };
    // Handle display enable change
    // Handle fromElement update
    React.useEffect(function () {
        container = updateContainer(container, fromElement);
        setFrom(fromElement);
        if (display) {
            appendNode();
        }
        else {
            removeNode();
        }
    }, [fromElement, display]);
    // Handle window resize
    React.useEffect(function () {
        var updateListener = function () { return updateContainer(container, from); };
        window.addEventListener('resize', updateListener);
        return function () { return window.removeEventListener('resize', updateListener); };
    });
    // Handle close by clicking out
    React.useEffect(function () {
        if (display) {
            var clickListener_1 = function (event) {
                event.preventDefault();
                if (!container.contains(event.target)) {
                    setDisplay(false);
                }
            };
            window.addEventListener('mousedown', clickListener_1);
            return function () { return window.removeEventListener('mousedown', clickListener_1); };
        }
    }, [display]);
    return {
        component: display && ReactDOM__default['default'].createPortal(wrapChildren(), container),
        displayState: [display, setDisplay],
    };
};var SelectContainer = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject([""], [""])));
var SelectOptionsContainer = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n    position: absolute;\n    left: 0;\n    right: 0;\n"], ["\n    position: absolute;\n    left: 0;\n    right: 0;\n"])));
var SelectListContainer = styled__default['default'](framerMotion.motion.div)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n    width: 100%;\n    padding: 5px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow: auto;\n\n    background-color: ", ";\n    box-shadow: ", ";\n"], ["\n    width: 100%;\n    padding: 5px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow: auto;\n\n    background-color: ", ";\n    box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.boxShadow.active;
});
var SelectListElement = styled__default['default'].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n    padding: 5px;\n    width: 100%;\n\n    &:hover {\n        cursor: pointer;\n        background-color: ", ";\n    }\n"], ["\n    padding: 5px;\n    width: 100%;\n\n    &:hover {\n        cursor: pointer;\n        background-color: ", ";\n    }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, invert = _a.invert;
    return getColorOrDefault(theme, color, invert, 0.3);
});
var templateObject_1$7, templateObject_2$3, templateObject_3$3, templateObject_4$2;var SelectList = function (_a) {
    var list = _a.list, onSelect = _a.onSelect, props = __rest(_a, ["list", "onSelect"]);
    return (React__default['default'].createElement(SelectListContainer, __assign({}, props), list.map(function (item) { return (React__default['default'].createElement(SelectListElement, __assign({}, props, { key: Math.round(100000 * Math.random()), onClick: function () { return onSelect(item); } }), "" + item)); })));
};var Select = function (_a) {
    var label = _a.label, list = _a.list, value = _a.value, styleType = _a.styleType, color = _a.color, invert = _a.invert, onSelect = _a.onSelect, placeholder = _a.placeholder;
    var ref = React.useRef(null);
    var _b = React.useState(value), currentValue = _b[0], setCurrentValue = _b[1];
    var selectHandler = function (item) {
        setCurrentValue(item);
        setDisplaySelectList(false);
        if (onSelect)
            onSelect(item);
    };
    var _c = useAside(React__default['default'].createElement(SelectList, { color: color, invert: invert, list: list, onSelect: selectHandler }), {
        fromElement: ref.current,
        enableOverlay: false,
    }), selectList = _c.component, _d = _c.displayState, displaySelectList = _d[0], setDisplaySelectList = _d[1];
    React.useEffect(function () {
        setCurrentValue(value);
    }, [value]);
    var Container;
    switch (styleType) {
        case 'solid':
            Container = SolidFormField;
            break;
        case 'outline':
            Container = OutlineFormField;
            break;
        default:
            Container = DownlineFormField;
    }
    return (React__default['default'].createElement(Container, { color: color, invert: invert, ref: ref, onMouseDown: function () { return setDisplaySelectList(true); } },
        label && React__default['default'].createElement(FormFieldLabel, null, label),
        React__default['default'].createElement(InputElement, { color: color, invert: invert, disabled: true, defaultValue: currentValue ? "" + currentValue : '', placeholder: placeholder }),
        React__default['default'].createElement(Icon, { name: "chevronDown", width: "25px", height: "25px", color: color, invert: invert, animate: { rotate: displaySelectList ? 180 : 0 } }),
        selectList));
};exports.Button=Button;exports.DarkTheme=DarkTheme;exports.GlobalStyle=GlobalStyle;exports.Icon=Icon;exports.Icons=Icons;exports.Input=Input;exports.LightTheme=LightTheme;exports.Modal=Modal;exports.PointSlider=PointSlider;exports.Select=Select;exports.SliderActivedRail=SliderActivedRail;exports.SliderRail=SliderRail;exports.SliderTracker=SliderTracker;exports.getGlobalTheme=getGlobalTheme;exports.setGlobalTheme=setGlobalTheme;exports.useAside=useAside;//# sourceMappingURL=index.js.map
