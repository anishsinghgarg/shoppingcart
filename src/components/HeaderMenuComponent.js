
import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import '../App.css';

const HeaderMenuComponent = () => (
    <div>
        <Header as='h1' icon textAlign='center'>
                <Icon circular inverted color='blue' name='shop' size='small'/>
            <Header.Content>Shopping App</Header.Content>
        </Header>

    </div>
)
export default HeaderMenuComponent;