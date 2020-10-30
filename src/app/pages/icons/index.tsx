import React from 'react';
import Page from 'app/components/page';
import { Icon, Icons } from 'lib';
import { IconContainerElement } from './styles';
import { ComponentsContainer } from 'app/components/components-container';

const Strings = {
    Heading: {
        MainTitle: 'Icons',
    },
};

const IconsPage = (): JSX.Element => {
    return (
        <Page>
            <h1>{Strings.Heading.MainTitle}</h1>
            <ComponentsContainer>
                {Object.keys(Icons).map(key => (
                    <IconContainerElement>
                        <Icon name={key} color="secondary" />
                        <span>{key}</span>
                    </IconContainerElement>
                ))}
            </ComponentsContainer>
        </Page>
    );
};

export default IconsPage;
