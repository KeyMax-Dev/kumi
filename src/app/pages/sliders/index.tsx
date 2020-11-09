import Page from 'app/components/page';
import { Slider } from 'lib';
import React from 'react';

const Strings = {
    Heading: {
        MainTitle: 'Sliders',
    },
};

const SlidersPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <Slider></Slider>
        </Page>
    );
};

export default SlidersPage;
