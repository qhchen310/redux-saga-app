import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        return (
            <header id="headerRoot">
                <div id='nav-bar_left'>
                    <p>homepage</p>
                </div>
                <div id='nav-bar_right'>
                    <button className='loginBtn'>login</button>
                    <p>content</p>
                    <p>test</p>
                </div>
            </header>
        );
    }
}

export default connect()(Header);