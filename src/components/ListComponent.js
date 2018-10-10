import React, { Component } from 'react';

class UserList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.users.map(function (user) {
          return (
            <li className="list-group-item" key={user.customerId}>{user.customerName}</li>
          )
        })}
      </ul>
    )
  }
}
export default UserList;
