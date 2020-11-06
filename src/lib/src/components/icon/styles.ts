import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconProps } from '.';

export const IconElement = styled(motion.div)<IconProps>`
    width: ${({ theme, width }): string => width || theme.defaultIconSize};
    height: ${({ theme, height }): string => height || theme.defaultIconSize};
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 100%;
        height: 100%;
    }
    path {
        fill: ${({ theme, color, invert }): string =>
            theme.colors[color || 'primary'][invert ? 'contrast' : 'principal']};
    }
`;
