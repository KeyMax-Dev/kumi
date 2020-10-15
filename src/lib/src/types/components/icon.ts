import { HTMLMotionProps } from 'framer-motion';
import { BaseComponentProps } from './component';

export interface IconProps extends BaseComponentProps, HTMLMotionProps<'div'> {
    name: string;
    height?: string;
    width?: string;
}
