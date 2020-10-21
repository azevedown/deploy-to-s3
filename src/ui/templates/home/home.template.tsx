import React, { FunctionComponent } from 'react';
import { Header, Footer } from '../../molecules';
import {
    Container
} from './home.template.style';

export const HomeTemplate: FunctionComponent = (props) => {
    return (
        <>
            <Header showButtons={true}/>
            <Container fluid>
                {props.children}
            </Container>
            <Footer />
        </>
    )
};
