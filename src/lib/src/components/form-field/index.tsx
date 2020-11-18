import { createClassName } from 'lib/src/utils';
import React from 'react';
import {
    DownlineFormFieldContainer,
    FormFieldContainer,
    FormFieldLabelElement,
    OutlineFormFieldContainer,
    SolidFormFieldContainer,
} from './styles';

type FormFieldProps = React.ComponentPropsWithRef<typeof FormFieldContainer>;

export const FormField = React.forwardRef<unknown, FormFieldProps>(
    (props, ref): JSX.Element => {
        return (
            <FormFieldContainer
                {...props}
                ref={ref}
                className={createClassName(['form', 'field'], props?.className)}
                role="form-field-container"
            />
        );
    }
);

export const DownlineFormField = React.forwardRef<unknown, FormFieldProps>(
    (props, ref): JSX.Element => {
        return (
            <DownlineFormFieldContainer
                {...props}
                ref={ref}
                className={createClassName(['form', 'field', 'downline'], props?.className)}
                role="form-field-container"
            />
        );
    }
);

export const OutlineFormField = React.forwardRef<unknown, FormFieldProps>(
    (props, ref): JSX.Element => {
        return (
            <OutlineFormFieldContainer
                {...props}
                ref={ref}
                className={createClassName(['form', 'field', 'outline'], props?.className)}
                role="form-field-container"
            />
        );
    }
);

export const SolidFormField = React.forwardRef<unknown, FormFieldProps>(
    (props, ref): JSX.Element => {
        return (
            <SolidFormFieldContainer
                {...props}
                ref={ref}
                className={createClassName(['form', 'field', 'solid'], props?.className)}
                role="form-field-container"
            />
        );
    }
);

type FormFieldLabelProps = React.ComponentPropsWithRef<typeof FormFieldLabelElement>;

export const FormFieldLabel = React.forwardRef<unknown, FormFieldLabelProps>(
    (props, ref): JSX.Element => {
        return (
            <FormFieldLabelElement
                {...props}
                ref={ref}
                className={createClassName(['from', 'field', 'label'])}
                role="form-field-label"
            />
        );
    }
);
