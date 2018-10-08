
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import SerchButtonComponent from './SerchButtonComponent';
import AddNewButtonComponent from './AddNewButtonComponent';
import ClientDataComponent from './ClientDataComponent';
import HomeContainer from './HomeContainer';

export default class MenuComponent extends Component {
    constructor(props) {
    super(props);
    this.state = { activeItem: 'home' }
     this.handleItemClick=this.handleItemClick.bind(this);
    }
    //handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleItemClick(event) {
     const {id} = event.target;
        console.log(id);
     this.setState({ activeItem: id });
    }
    render() {
        const { activeItem } = this.state
        return (<Router>
            <div>
                <Segment inverted>
                    <Links clickHandler={this.handleItemClick} dynVal={activeItem} />
                </Segment>
                <section>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/userManagement" component={UserManagement} />
                </section>
            </div>
        </Router>
        )
    }
}

const HomeComponent = () => (
    <HomeContainer />
)

const UserManagement = () => (
    <div>
        <hr />
        <div className="right floated left aligned six wide column">
            <AddNewButtonComponent />
            <SerchButtonComponent />
        </div>
        <ClientDataComponent />
    </div>
)

const Links = (props) => (

    <Menu inverted pointing secondary>
        <Menu.Item as={Link} to='/' id='home' name='home' active={props.dynVal === 'home'} onClick={props.clickHandler}>Home</Menu.Item>
        <Menu.Item as={Link} to='/userManagement' id='userManagement' active={props.dynVal === 'userManagement'} name='userManagement' onClick={props.clickHandler}>User Management</Menu.Item>
    </Menu>

)


