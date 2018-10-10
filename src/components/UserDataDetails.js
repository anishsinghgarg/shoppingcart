import React, { Component } from 'react';
import { Table,Button } from 'semantic-ui-react';

class UserList extends Component {
    render() {
        return (<Table.Body>
            {this.props.users.map(function (user) {
                return (
                    <Table.Row id={user.customerId}>
                        <Table.Cell >{user.customerId}</Table.Cell>
                        <Table.Cell>{user.customerName}</Table.Cell>
                        <Table.Cell>Image {user.customerId}</Table.Cell>
                        <Table.Cell>{user.customerEmail}</Table.Cell>
                        <Table.Cell>{user.customerContactNo}</Table.Cell>
                        <Table.Cell><Button basic color='blue' content='Regi' /></Table.Cell>
                        <Table.Cell>
                            <Button basic color='blue'><i className="edit icon"></i></Button><Button basic color='red'><i className="delete icon"></i></Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })
            }
        </Table.Body>
        )
    }
}
export default UserList;

