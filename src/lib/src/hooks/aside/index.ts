import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createContainer, createOverlay, updateContainer } from './core';
import { AsideController, AsideProps } from './types';

let container = createContainer();
let overlay = createOverlay();

export const useAside = (
    children: React.ReactNode,
    { fromElement = null, wrappers = [], enableOverlay = true }: AsideProps = {
        fromElement: null,
        wrappers: [],
        enableOverlay: true,
    }
): AsideController => {
    const [display, setDisplay] = useState<boolean>(false);
    const [from, setFrom] = useState<HTMLElement | null>(fromElement);

    const wrapChildren = (): React.ReactNode => {
        return wrappers.reduce(
            (previous, current) =>
                React.createElement(current, { children: previous, displayState: [display, setDisplay] }),
            children
        );
    };

    const appendNode = (): void => {
        if (enableOverlay) {
            if (document.body.contains(overlay)) {
                document.body.replaceChild(overlay, overlay);
            } else {
                document.body.appendChild(overlay);
            }
        }

        if (document.body.contains(container)) {
            document.body.replaceChild(container, container);
        } else {
            document.body.appendChild(container);
        }

        // document.body.style.overflow = 'hidden';
    };

    const removeNode = (): void => {
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
        if (display) {
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
        component: display && ReactDOM.createPortal(wrapChildren(), container),
        displayState: [display, setDisplay],
    };
};

export * from './types';
export * from './wrappers';
