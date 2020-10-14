import React from 'react';
import Page from '../../components/page';

const Strings = {
    Heading: {
        MainTitle: 'Key User Max Interface - KUMI',
    },
    Paragraph: {
        About:
            'This project is developed by KeyMax developers with the main objective of create a library of custom components to speed up the building of React projects.',
    },
};

const HomePage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <p>{Strings.Paragraph.About}</p>
        </Page>
    );
};

export default HomePage;
