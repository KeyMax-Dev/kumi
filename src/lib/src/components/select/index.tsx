import { HTMLMotionProps } from 'framer-motion';
import { useAside } from 'lib/src/hooks';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import React, { useEffect, useRef, useState } from 'react';
import { Input, InputStyleTypes } from '../input';
import { SelectList } from './list';

export interface SelectProps<T = any> extends ThemedComponentProps, StyleTypedComponentProps<InputStyleTypes> {
    label?: string;
    list: T[];
    value?: T;
    onSelect?: (selected: T) => void;
    placeholder?: string;
}

export const Select = <T extends any = any>({
    label,
    list,
    value,
    styleType,
    color,
    invert,
    onSelect,
    placeholder,
}: SelectProps<T>): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    const [currentValue, setCurrentValue] = useState<T | undefined>(value);

    const selectHandler = (item: T): void => {
        setCurrentValue(item);
        setDisplaySelectList(false);
        if (onSelect) onSelect(item);
    };

    const {
        component: selectList,
        displayState: [, setDisplaySelectList],
    } = useAside({
        children: <SelectList<T> list={list} onSelect={selectHandler} />,
        fromElement: ref.current,
        backdropClose: true,
    });

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    return (
        <div ref={ref} onMouseDown={() => setDisplaySelectList(true)}>
            <Input
                iconRight="chevronDown"
                defaultValue={currentValue ? `${currentValue}` : ''}
                styleType={styleType}
                contentEditable={false}
                color={color}
                invert={invert}
                label={label}
                placeholder={placeholder}
            />
            {selectList}
        </div>
    );
};
