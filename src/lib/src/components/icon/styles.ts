import styled from 'styled-components';
import { getGlobalTheme } from 'lib/src/assets/themes';
import { motion } from 'framer-motion';
import { IconProps } from 'lib/src/types/components/icon';

export const IconElement = styled(motion.div)<IconProps>`
    width: ${({ width }): string => width || getGlobalTheme().defaultIconSize};
    height: ${({ height }): string => height || getGlobalTheme().defaultIconSize};
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 100%;
        height: 100%;
    }
    path {
        fill: ${(props): string =>
            props.color
                ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal']
                : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
    }
`;
