export const createContainer = (): HTMLElement => {
    const element = document.createElement('aside');

    element.style.position = 'fixed';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';

    return element;
};

const updateContainerFrom = (container: HTMLElement, from: HTMLElement): HTMLElement => {
    const fromBounding = from.getBoundingClientRect();
    const actualBounding = container.getBoundingClientRect();

    if (actualBounding.width && actualBounding.width > fromBounding.width) {
        let left = fromBounding.left - (actualBounding.width - fromBounding.width) / 2;
        if (left < 10) left = 0;
        container.style.left = `${left}px`;
    } else {
        container.style.left = `${fromBounding.left}px`;
    }
    container.style.top = `${fromBounding.top}px`;
    container.style.minWidth = `${fromBounding.width}px`;

    if (actualBounding.right > window.innerWidth - 10)
        container.style.width = `${window.innerWidth - actualBounding.left - 10}px`;
    else container.style.width = '';
    if (actualBounding.bottom > window.innerHeight - 10)
        container.style.height = `${window.innerHeight - actualBounding.top - 10}px`;
    else container.style.height = '';

    container.style.right = '';
    container.style.bottom = '';

    return container;
};

const updateContainerAlone = (container: HTMLElement): HTMLElement => {
    container.style.width = '';
    container.style.height = '';
    container.style.top = '0';
    container.style.right = '0';
    container.style.bottom = '0';
    container.style.left = '0';

    return container;
};

export const updateContainer = (container: HTMLElement, from: HTMLElement | null): HTMLElement => {
    if (from) return updateContainerFrom(container, from);
    else return updateContainerAlone(container);
};
