import React from 'react'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'

const ClientDataComponent = () => (
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

        <Table.Body>
            <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Ansih Singh</Table.Cell>
                <Table.Cell>Image 1</Table.Cell>
                <Table.Cell>anish.singh@yash.com</Table.Cell>
                <Table.Cell>9661188221</Table.Cell>
                <Table.Cell><Button basic color='blue' content='Regi' /></Table.Cell>
                <Table.Cell>
<Button basic color='blue'><i class="edit icon"></i></Button><Button basic color='red'><i class="delete icon"></i></Button>
                   
                </Table.Cell>
            </Table.Row>

        </Table.Body>

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
)

export default ClientDataComponent