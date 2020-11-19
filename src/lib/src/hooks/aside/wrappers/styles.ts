import { motion } from 'framer-motion';
import { createClassName } from 'lib/src/utils';
import styled from 'styled-components';

export const ModalContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary.contrast};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 30px;
    box-shadow: ${({ theme }) => theme.boxShadow.normal};

    .${createClassName(['modal', 'close'])} {
        position: absolute;
        right: 3px;
        top: 3px;
        padding: 3px;
        margin: 0;
    }
`;
