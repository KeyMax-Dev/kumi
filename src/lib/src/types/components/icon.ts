import { HTMLMotionProps } from 'framer-motion';
import { ThemedComponentProps } from './themed-component';

export interface IconProps extends ThemedComponentProps, HTMLMotionProps<'div'> {
    name: string;
    height?: string;
    width?: string;
}
