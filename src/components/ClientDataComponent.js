import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Button,Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import UserList from './UserDataDetails'

import { fetchAllUsers } from "../actions/userAction"

class ClientDataComponent extends Component {
    componentDidMount() {
        this.props.fetchAllUsers();

    }

    render() {

        return (
            <div>
                <Header as='h2' textAlign='center' style={{ fontSize: "3em", fontFamily: '-webkit-pictograph' }}>List of Users</Header>
              
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>SNo</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Inamge</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Contact</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Operation</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <UserList users={this.props.users} />

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='7'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    if (state.users.length > 0) {
        return {
            users: state.users
        };
    } else {
        return {
            users: [{ customerId: 420, customerName: '', customerContactNo: '', customerEmail: '', isActive: '', createdDate: '' }]
        }
    }
}
export default connect(mapStateToProps, { fetchAllUsers })(ClientDataComponent);