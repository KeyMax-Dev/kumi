import React from 'react';
import Page from 'app/components/page';
import { Button } from 'lib';
import { ComponentsContainer } from 'app/components/components-container';

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
            <ComponentsContainer>
                <Button>Solid</Button>
                <Button invert icon="cog">
                    Solid Invert
                </Button>
                <Button disabled>Solid Disabled</Button>
            </ComponentsContainer>
            <h2>{Strings.Heading.OutlineButtons}</h2>
            <ComponentsContainer>
                <Button styleType="outline">Outline</Button>
                <Button invert styleType="outline" icon="cog">
                    Outline
                </Button>
                <Button styleType="outline" disabled>
                    Outline Disabled
                </Button>
            </ComponentsContainer>
            <h2>{Strings.Heading.IconButtons}</h2>
            <ComponentsContainer>
                <Button styleType="icon" icon="account"></Button>
                <Button styleType="icon" icon="cog">
                    Configurações
                </Button>
                <Button styleType="icon" icon="account" disabled>
                    Account
                </Button>
            </ComponentsContainer>
        </Page>
    );
};

export default ButtonsPage;
