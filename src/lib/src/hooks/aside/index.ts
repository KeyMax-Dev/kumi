import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createContainer, updateContainer } from './core';

export interface AsideComponent {
    component: false | React.ReactPortal;
    displayState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export interface AsideProps {
    children: React.ReactNode;
    fromElement?: HTMLElement | null;
    backdropClose?: boolean;
}

let container = createContainer();

export const useAside = ({ children, fromElement = null, backdropClose = true }: AsideProps): AsideComponent => {
    const [display, setDisplay] = useState<boolean>(false);
    const [from, setFrom] = useState<HTMLElement | null>(fromElement);

    const appendNode = (): void => {
        if (document.body.contains(container)) {
            document.body.replaceChild(container, container);
        } else {
            document.body.appendChild(container);
        }
        // document.body.style.overflow = 'hidden';
    };

    const removeNode = (): void => {
        if (document.body.contains(container)) {
            document.body.removeChild(container);
        }
        // document.body.style.overflow = '';
    };

    // Handle display enable change
    // Handle fromElement update
    useEffect(() => {
        container = updateContainer(container, fromElement);
        setFrom(fromElement);

        if (display) {
            appendNode();
        } else {
            removeNode();
        }
    }, [fromElement, display]);

    // Handle window resize
    useEffect(() => {
        const updateListener = () => updateContainer(container, from);

        window.addEventListener('resize', updateListener);
        return () => window.removeEventListener('resize', updateListener);
    });

    // Handle close by clicking out
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
        displayState: [display, setDisplay],
    };
};
