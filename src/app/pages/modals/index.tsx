import React from 'react';
import Page from 'app/components/page';
import { Button, useAside } from 'lib';
import { Modal } from 'lib/src/hooks/aside/wrappers';

const Strings = {
    Heading: {
        MainTitle: 'Modals',
    },
};

const ModalsPage = (): JSX.Element => {
    const {
        component: modal,
        displayState: [display, setDisplay],
    } = useAside(<h1>I'm a modal</h1>, { wrappers: [Modal] });

    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <Button onClick={() => setDisplay(true)}>Open Modal</Button>
            {modal}
        </Page>
    );
};

export default ModalsPage;
