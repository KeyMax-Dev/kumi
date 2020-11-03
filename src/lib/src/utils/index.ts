export const createClassName = (name: string[], currentClassName?: string): string => {
    const prefix = 'kumi-';
    const separator = '-';

    return `${prefix}${name.join(separator)}${currentClassName ? ` ${currentClassName}` : ''}`;
};
