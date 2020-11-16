import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export interface AsideComponent {
    component: false | React.ReactPortal;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
    display: boolean;
}

export interface AsideProps {
    children: React.ReactNode;
    fromElement?: HTMLElement | null;
    backdropClose?: boolean;
}

const createContainer = (): HTMLElement => {
    const element = document.createElement('aside');

    element.style.position = 'fixed';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';

    return element;
};

let container = createContainer();

const updateContainer = (container: HTMLElement, from: HTMLElement): HTMLElement => {
    console.log('update');
    const fromBounding = from.getBoundingClientRect();
    const actualBounding = container.getBoundingClientRect();

    if (actualBounding.width && actualBounding.width > fromBounding.width) {
        container.style.left = `${fromBounding.left - (actualBounding.width - fromBounding.width) / 2}px`;
    } else {
        container.style.left = `${fromBounding.left}px`;
    }
    container.style.top = `${fromBounding.top}px`;
    container.style.minWidth = `${fromBounding.width}px`;

    if (actualBounding.left < 10) container.style.left = '10px';
    if (actualBounding.right > window.innerWidth - 10)
        container.style.width = `${window.innerWidth - actualBounding.left - 10}px`;
    else container.style.width = '';
    if (actualBounding.bottom > window.innerHeight - 10)
        container.style.height = `${window.innerHeight - actualBounding.top - 10}px`;
    else container.style.height = '';

    return container;
};

export const useAside = ({ children, fromElement, backdropClose = true }: AsideProps): AsideComponent => {
    const [display, setDisplay] = useState<boolean>(false);

    const appendNode = (): void => {
        if (document.body.contains(container)) {
            document.body.replaceChild(container, container);
        } else {
            document.body.appendChild(container);
        }
        document.body.style.overflow = 'hidden';
        if (fromElement) {
            updateContainer(container, fromElement);
        }
    };

    const removeNode = (): void => {
        if (document.body.contains(container)) {
            document.body.removeChild(container);
        }
        document.body.style.overflow = '';
    };

    useEffect(() => {
        if (display) {
            appendNode();
        } else {
            removeNode();
        }
    }, [display]);

    useEffect(() => {
        if (fromElement) {
            container = updateContainer(container, fromElement);
        }
    }, [fromElement, display]);

    useEffect(() => {
        if (fromElement) {
            const updateListener = () => updateContainer(container, fromElement);

            window.addEventListener('resize', updateListener);
            return () => window.removeEventListener('resize', updateListener);
        }
    });

    useEffect(() => {
        if (display && backdropClose) {
            const clickListener = (event: MouseEvent): void => {
                event.preventDefault();
                if (!container.contains(event.target as HTMLElement)) {
                    setDisplay(false);
                }
            };

            window.addEventListener('mousedown', clickListener);
            return () => window.removeEventListener('mousedown', clickListener);
        }
    }, [display]);

    return {
        component: display && ReactDOM.createPortal(children, container),
        setDisplay,
        display,
    };
};
