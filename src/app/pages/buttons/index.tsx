import React from 'react';
import Page from 'app/components/page';
import { Button } from 'lib';

const Strings = {
    Heading: {
        MainTitle: 'Buttons',
        SolidButtons: 'Solid Buttons',
        OutlineButtons: 'Outline Buttons',
        IconButtons: 'Icon Buttons',
    },
};

const ButtonsPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <h2>{Strings.Heading.SolidButtons}</h2>
            <Button>Solid</Button>
            <Button disabled>Solid Disabled</Button>
            <h2>{Strings.Heading.OutlineButtons}</h2>
            <Button styleType="outline">Outline</Button>
            <Button styleType="outline" disabled>
                Outline Disabled
            </Button>
            <h2>{Strings.Heading.IconButtons}</h2>
        </Page>
    );
};

export default ButtonsPage;
