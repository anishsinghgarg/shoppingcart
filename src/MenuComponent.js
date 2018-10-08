
import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuComponent extends Component {
    render() {
        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item name='home' active={'home'} />
                    <Menu.Item name='User Management' />
                    <Menu.Item name='Order Management' />
                    <Menu.Item name='Product Management' />
                </Menu>
            </Segment>
        )
    }
}