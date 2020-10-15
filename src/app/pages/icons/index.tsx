import React from 'react';
import Page from 'app/components/page';
import { Icon, Icons } from 'lib';
import { IconContainerElement, IconsListElement } from './styles';

const Strings = {
    Heading: {
        MainTitle: 'Icons',
    },
};

const IconsPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <IconsListElement>
                {Object.keys(Icons).map(key => (
                    <IconContainerElement>
                        <Icon name={key} color="secondary" />
                        <span>{key}</span>
                    </IconContainerElement>
                ))}
            </IconsListElement>
        </Page>
    );
};

export default IconsPage;
