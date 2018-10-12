import React, { Component } from 'react';
import { Icon, Label, Menu, Table, Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import UserList from './UserDataDetails'

import { fetchAllUsers, updateUser } from "../actions/userAction"

class ClientDataComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: { users: props.users },
            user: {}
        }
    }
    componentDidMount() {
        this.props.fetchAllUsers();
    }

    toggelStatus = (e) => {
          e.preventDefault();
        alert("Name ::" + e.target.name + " | Value ::" + e.target.value);
        // this.setState({data:this.state.issues[index].complete = true});
        let rid = e.target.value;
        let activeCode = e.target.name;
        activeCode = activeCode == 'N' ? 'Y' : 'N';
        // setUserSelectedState(e.target.value);
        this.setState({
            data: this.state.user =
            this.props.users.find((element) => {
                return element.customerId === parseInt(rid);
            })
        });
        this.setState({data:this.state.user.isActive=activeCode});
alert("Got The Individual Object ::" + JSON.stringify(this.state.user));

        this.props.dispatch(updateUser(this.state.user));

        // alert("Got The Individual Object ::" + JSON.stringify(this.state.user));
    }


    render() {

        return (
            <div>
                <h2 className="ui horizontal divider header" style={{ fontSize: "1em", fontFamily: '-webkit-pictograph' }}>
                    <i className="user icon"></i>
                    List of Users</h2>
                <table id="example" class="ui celled table" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Inamge</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Status</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <UserList key={this.props.users} users={this.props.users} myClick={this.toggelStatus} />
                </table>
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
            users: [{ customerId: 420, customerName: 'ABC', customerContactNo: '', customerEmail: '', isActive: '', createdDate: '' }, { customerId: 421, customerName: 'XYZ', customerContactNo: '', customerEmail: '', isActive: '', createdDate: '' }]
        }
    }
}
function mapDispatchToProps() {
}
export default connect(mapStateToProps, { fetchAllUsers,updateUser })(ClientDataComponent);