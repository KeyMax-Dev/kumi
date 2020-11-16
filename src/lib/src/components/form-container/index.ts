import { motion } from 'framer-motion';
import { ThemedComponentProps } from 'lib/src/types';
import styled from 'styled-components';

export const FormContainer = styled(motion.div)<ThemedComponentProps>`
    min-width: 300px;
    height: 50px;
    margin: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;
