import React from 'react'
import { Container, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const HomeContainer = () => (
    <div>
        <Container fluid>
            <Header as='h2' textAlign='center' style={{ fontSize: "5em", fontFamily: '-webkit-pictograph' }}>Shopping App</Header>
            <p>
                <img src='online.png' style={{maxWidth: '100%'}}></img>
            </p>

        </Container>
    </div>
)
export default HomeContainer