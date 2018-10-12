
import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import '../App.css';

const HeaderMenuComponent = () => (


    <div className="ui horizontal list">
        <div className="item">
            <img className="ui small circular image" src="shopping-cart.jpg" />
            <div className="content">
                <div className="ui sub header"><h2 style={{ fontSize: "2em", fontFamily: '-webkit-pictograph' }}>Shopping App</h2></div>
                Buy what you Wish !!!
            </div>
        </div>
    </div>

)
export default HeaderMenuComponent;