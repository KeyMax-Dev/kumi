import React from 'react';
import Page from '../../components/page';

const Strings = {
    Heading: {
        MainTitle: 'Icons',
    },
};

const IconsPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
        </Page>
    );
};

export default IconsPage;
