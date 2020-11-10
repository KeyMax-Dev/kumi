import Page from 'app/components/page';
import { PointSlider } from 'lib';
import { RangeSlider } from 'lib/src/components/slider/range-slider';
import React from 'react';

const Strings = {
    Heading: {
        MainTitle: 'Sliders',
        PointSlider: 'Point Slider',
        RangeSlider: 'Range Slider',
    },
};

const SlidersPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <h2>{Strings.Heading.PointSlider}</h2>
            <PointSlider value={10} />
            <PointSlider value={32} activeHail />
            <h2>{Strings.Heading.RangeSlider}</h2>
            <RangeSlider onChange={value => console.log(value)} />
        </Page>
    );
};

export default SlidersPage;
