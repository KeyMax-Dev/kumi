import { HTMLMotionProps } from 'framer-motion';
import { useAside } from 'lib/src/hooks';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import React, { useEffect, useRef, useState } from 'react';
import { Input, InputStyleTypes } from '../input';
import { SelectList } from './list';

export interface SelectProps<T = any> extends ThemedComponentProps, StyleTypedComponentProps<InputStyleTypes> {
    iconLeft?: string;
    iconRight?: string;
    label?: string;
    containerProps?: HTMLMotionProps<'div'>;
    list: T[];
    value?: T;
}

export const Select = <T extends any = any>({ list, value }: SelectProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    const [currentValue, setCurrentValue] = useState<T>(value);

    const selectHandler = (item: T): void => {
        setCurrentValue(item);
        selectList.setDisplay(false);
    };

    const selectList = useAside({
        children: <SelectList<T> list={list} onSelect={selectHandler} />,
        fromElement: ref.current,
    });

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    return (
        <div ref={ref} onMouseDown={() => selectList.setDisplay(true)}>
            <Input iconRight="chevronDown" value={currentValue ? `${currentValue}` : 'Select...'} />
            {selectList.component}
        </div>
    );
};
