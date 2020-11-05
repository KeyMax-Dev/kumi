import React from 'react';
import Page from 'app/components/page';
import { getGlobalTheme } from 'lib';

const Strings = {
    Heading: {
        MainTitle: 'Themes',
        Colors: 'Colors',
    },
};

const ThemesPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <h2>{Strings.Heading.Colors}</h2>
        </Page>
    );
};

export default ThemesPage;
