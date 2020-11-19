import { ThemedComponentProps } from 'lib/src/types';
import React from 'react';
import { SelectListContainer, SelectListElement } from './styles';

export interface SelectListProps<T extends any> extends ThemedComponentProps {
    list: T[];
    onSelect: (item: T) => void;
}

export const SelectList = <T extends any>({ list, onSelect, ...props }: SelectListProps<T>): JSX.Element => {
    return (
        <SelectListContainer {...props}>
            {list.map(item => (
                <SelectListElement
                    {...props}
                    key={Math.round(100000 * Math.random())}
                    onClick={() => onSelect!(item)}
                >{`${item}`}</SelectListElement>
            ))}
        </SelectListContainer>
    );
};
