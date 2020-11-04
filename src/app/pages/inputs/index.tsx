import React, { useState } from 'react';
import Page from 'app/components/page';
import { ComponentsContainer } from 'app/components/components-container';
import { Input } from 'lib';

const Strings = {
    Heading: {
        MainTitle: 'Inputs',
        InputDownline: 'Input Downline',
        InputOutline: 'Input Outline',
        InputSolid: 'Input Solid',
    },
};

const InputsPage = (): JSX.Element => {
    const [state, setState] = useState('');

    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <h2>{Strings.Heading.InputDownline}</h2>
            <ComponentsContainer>
                <Input
                    placeholder="placeholder"
                    label="Label"
                    value={state}
                    onChange={event => setState(event.currentTarget.value)}
                />
                <Input placeholder="placeholder" label="Icon Left" iconLeft="account" />
                <Input placeholder="placeholder" label="Icon Right" iconRight="account" />
                <Input placeholder="placeholder" label="Icon Left Right" iconLeft="account" iconRight="account" />
            </ComponentsContainer>
            <h2>{Strings.Heading.InputOutline}</h2>
            <ComponentsContainer>
                <Input styleType="outline" placeholder="placeholder" label="Label" />
                <Input styleType="outline" placeholder="placeholder" label="Icon Left" iconLeft="account" />
                <Input styleType="outline" placeholder="placeholder" label="Icon Right" iconRight="account" />
                <Input
                    styleType="outline"
                    placeholder="placeholder"
                    label="Icon Left Right"
                    iconLeft="account"
                    iconRight="account"
                />
            </ComponentsContainer>
            <h2>{Strings.Heading.InputSolid}</h2>
            <ComponentsContainer>
                <Input styleType="solid" placeholder="placeholder" label="Label" />
                <Input styleType="solid" placeholder="placeholder" label="Icon Left" iconLeft="account" />
                <Input styleType="solid" placeholder="placeholder" label="Icon Right" iconRight="account" />
                <Input
                    styleType="solid"
                    placeholder="placeholder"
                    label="Icon Left Right"
                    iconLeft="account"
                    iconRight="account"
                />
            </ComponentsContainer>
        </Page>
    );
};

export default InputsPage;
