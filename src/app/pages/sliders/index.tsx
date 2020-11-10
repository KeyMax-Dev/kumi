import Page from 'app/components/page';
import { PointSlider } from 'lib';
import { RangeSlider } from 'lib/src/components/slider/range-slider';
import React, { useState } from 'react';

const Strings = {
    Heading: {
        MainTitle: 'Sliders',
        PointSlider: 'Point Slider',
        RangeSlider: 'Range Slider',
    },
};

const SIZES = ['PP', 'P', 'M', 'G', 'GG', 'XG'];

const SlidersPage = (): JSX.Element => {
    const [value, setValue] = useState<number>(0);

    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <h2>{Strings.Heading.PointSlider}</h2>
            <PointSlider
                value={value}
                scaleConfig={{ maxIterations: 100, scaleFunction: x => x }}
                onChange={newValue => setValue(newValue)}
            />
            <PointSlider value={5} scaleConfig={{ maxIterations: 10, scaleFunction: x => x }} activeHail />
            <PointSlider value={0} activeHail scaleConfig={{ maxIterations: 10, scaleFunction: x => x }} />
            <PointSlider
                value={SIZES[4]}
                activeHail
                scaleConfig={{ maxIterations: SIZES.length, scaleFunction: x => SIZES[x] }}
            />
            <h2>{Strings.Heading.RangeSlider}</h2>
            <RangeSlider<number>
                value={[2, 8]}
                scaleConfig={{ maxIterations: 10, scaleFunction: x => x }}
                onChange={value => console.log(value)}
            />
            <RangeSlider
                scaleConfig={{ maxIterations: SIZES.length, scaleFunction: x => SIZES[x] }}
                onChange={value => console.log(value)}
            />
        </Page>
    );
};

export default SlidersPage;
