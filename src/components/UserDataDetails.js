import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';

class UserList extends Component {

    //toggleStatus = (e) => {
    //    alert("Name ::" + e.target.name + " | Value ::" + e.target.value);
   // }

    render() {
       const { myClick } = this.props;
        return (

            <tbody>
                {this.props.users.map(function (user) {
                    return (
                        <tr id={user.customerId}>
                            <td>{user.customerId}</td>
                            <td>{user.customerName}</td>
                            <td>Image {user.customerId}</td>
                            <td>{user.customerEmail}</td>
                            <td>{user.customerContactNo}</td>
                            <td><Button basic value={user.customerId} name={user.isActive} onClick={myClick.bind(this)} color={user.isActive == 'Y' ?'blue':'red'} content={user.isActive == 'Y' ?'Reg':'Blocked'} /></td>
                            <td>
                                <Button basic color='blue'><i className="edit icon"></i></Button><Button basic color='red'><i className="delete icon"></i></Button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        )
    }
}
export default UserList;

