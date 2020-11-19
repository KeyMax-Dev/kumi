import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary.contrast};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;
