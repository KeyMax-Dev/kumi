import { AsideComponent } from 'lib/src/hooks';
import React from 'react';
import { SelectListContainer, SelectListElement } from './styles';

export interface SelectListProps<T extends any> {
    list: T[];
    onSelect: (item: T) => void;
}

export const SelectList = <T extends any>({ list, onSelect }: SelectListProps<T>): JSX.Element => {
    return (
        <SelectListContainer>
            {list.map(item => (
                <SelectListElement
                    key={Math.round(100000 * Math.random())}
                    onClick={() => onSelect!(item)}
                >{`${item}`}</SelectListElement>
            ))}
        </SelectListContainer>
    );
};
