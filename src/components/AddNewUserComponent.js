import React from 'react'
import { Modal, Form, Button, Icon } from 'semantic-ui-react';
import { createUser } from "../actions/userAction";
import { connect } from 'react-redux';

class AddNewUserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            something: '',
            showModal: false,
            user: {},
            submitted: false
        }
        //  this.handleChange = this.handleChange.bind(this);
        //  this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeForms = (e, { value }) => {
        this.setState({ something: value });
    }

    handleCreateButton(evt) {
        evt.preventDefault()
        //  this.closeModal();
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }
    onChange = (e) => {
        const state = this.state.user
        state[e.target.name] = e.target.value;
        this.setState({ user: state });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { customerName, customerEmail, customerContactNo, isActive } = this.state.user;
        const data = { customerName, customerEmail, customerContactNo, isActive };
       // alert(JSON.stringify(data));
        const { dispatch } = this.props;
        dispatch(createUser(data));
        this.closeModal();
    }

    render() {
        const { something, showModal } = this.state
        return (

            <Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<div className="column"><Button primary onClick={() => this.setState({ showModal: true })}><Icon className='plus' />New User</Button></div>}>
                <Modal.Header>Add New User</Modal.Header>
                <Modal.Content>

                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="customerName" placeholder="customerName" value={this.state.user.customerName} required onChange={this.onChange} />
                        </div>
                        <div className="field">
                            <label>Email Id</label>
                            <input type="text" name="customerEmail" placeholder="Email Id" value={this.state.user.customerEmail} required onChange={this.onChange} />
                        </div>
                        <div className="field">
                            <label>Contact</label>
                            <input type="text" name="customerContactNo" placeholder="Contact Number" value={this.state.user.customerContactNo} required onChange={this.onChange} />
                        </div>
                        <input type="hidden" name="isActive" value={this.state.user.isActive = 'Y'} required onChange={this.onChange} />
                        <button className="ui blue button" type="submit" >Save</button>
                    </form>
                </Modal.Content>
            </Modal>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return { user: state.user };
}
export default connect(mapStateToProps)(AddNewUserComponent);