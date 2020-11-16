import React from 'react';
import Page from 'app/components/page';
import { Select } from 'lib';

const Strings = {
    Heading: {
        MainTitle: 'Selects',
    },
};

const SELECT_LIST = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];

const SelectsPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <Select list={SELECT_LIST} />
        </Page>
    );
};

export default SelectsPage;
