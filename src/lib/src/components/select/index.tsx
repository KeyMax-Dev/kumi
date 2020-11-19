import { HTMLMotionProps } from 'framer-motion';
import { useAside } from 'lib/src/hooks';
import { StyleTypedComponentProps, ThemedComponentProps } from 'lib/src/types';
import React, { useEffect, useRef, useState } from 'react';
import { DownlineFormField, FormField, FormFieldLabel, OutlineFormField, SolidFormField } from '../form-field';
import { Icon } from '../icon';
import { Input, InputStyleTypes } from '../input';
import { InputElement } from '../input/styles';
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
        displayState: [displaySelectList, setDisplaySelectList],
    } = useAside(<SelectList<T> color={color} invert={invert} list={list} onSelect={selectHandler} />, {
        fromElement: ref.current,
    });

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    let Container: typeof FormField;

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

    return (
        <Container color={color} invert={invert} ref={ref} onMouseDown={() => setDisplaySelectList(true)}>
            {label && <FormFieldLabel>{label}</FormFieldLabel>}
            <InputElement
                color={color}
                invert={invert}
                disabled={true}
                defaultValue={currentValue ? `${currentValue}` : ''}
                placeholder={placeholder}
            />
            <Icon
                name="chevronDown"
                width="25px"
                height="25px"
                color={color}
                invert={invert}
                animate={{ rotate: displaySelectList ? 180 : 0 }}
            />
            {selectList}
        </Container>
    );
};
