import React from 'react';
import { AsideWrapper } from 'lib';
import { ModalContainer } from './styles';
import { Button } from 'lib';
import { createClassName } from 'lib/src/utils';

export const Modal: AsideWrapper = ({ children, displayState: [display, setDisplay] }) => {
    return (
        <ModalContainer className={createClassName(['modal'])}>
            {children}
            <Button
                styleType="icon"
                icon="close"
                onClick={() => setDisplay(false)}
                className={createClassName(['modal', 'close'])}
            />
        </ModalContainer>
    );
};
