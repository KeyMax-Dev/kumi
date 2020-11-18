import React from 'react';
import Page from 'app/components/page';
import { Select } from 'lib';
import { ComponentsContainer } from 'app/components/components-container';

const Strings = {
    Heading: {
        MainTitle: 'Selects',
        Downline: 'Select Downline',
        Outline: 'Select Outline',
        Solid: 'Select Solid',
    },
};

const SELECT_LIST = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];

const SelectsPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <h2>{Strings.Heading.Downline}</h2>
            <ComponentsContainer>
                <Select list={SELECT_LIST} label="Select Downline" />
                <Select list={SELECT_LIST} label="Select Downline" placeholder="placeholder" color="danger" />
                <Select list={SELECT_LIST} label="Select Downline" placeholder="placeholder" color="danger" invert />
            </ComponentsContainer>
            <h2>{Strings.Heading.Outline}</h2>
            <ComponentsContainer>
                <Select list={SELECT_LIST} label="Select Outline" styleType="outline" />
                <Select
                    list={SELECT_LIST}
                    label="Select Outline"
                    styleType="outline"
                    placeholder="placeholder"
                    color="danger"
                />
                <Select
                    list={SELECT_LIST}
                    label="Select Outline"
                    styleType="outline"
                    placeholder="placeholder"
                    color="danger"
                    invert
                />
            </ComponentsContainer>
            <h2>{Strings.Heading.Solid}</h2>
            <ComponentsContainer>
                <Select list={SELECT_LIST} label="Select Solid" styleType="solid" />
                <Select
                    list={SELECT_LIST}
                    label="Select Solid"
                    styleType="solid"
                    placeholder="placeholder"
                    color="danger"
                />
                <Select
                    list={SELECT_LIST}
                    label="Select Solid"
                    styleType="solid"
                    placeholder="placeholder"
                    color="danger"
                    invert
                />
            </ComponentsContainer>
        </Page>
    );
};

export default SelectsPage;
