import React from 'react';
import Page from 'app/components/page';
import { Button, useAside } from 'lib';
import { Modal } from 'lib/src/hooks/aside/wrappers';

const Strings = {
    Heading: {
        MainTitle: 'Modals',
    },
};

const LoremModal = (): JSX.Element => {
    return (
        <div>
            <h1>I'm a modal</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reprehenderit et deserunt inventore,
                exercitationem eum consequuntur unde repellendus perspiciatis deleniti veritatis laboriosam quas, ipsam
                consectetur, minima sequi necessitatibus nisi optio?
            </p>
        </div>
    );
};

const ModalsPage = (): JSX.Element => {
    const {
        component: modal,
        displayState: [display, setDisplay],
    } = useAside(<LoremModal />, { wrappers: [Modal] });

    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <Button onClick={() => setDisplay(true)}>Open Modal</Button>
            {modal}
        </Page>
    );
};

export default ModalsPage;
