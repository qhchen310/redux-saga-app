import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import actions from '../actions/user'


class Header extends Component {

    constructor(props){
        super(props);
        this.user = {};
    }

    componentDidMount(){
        
    }

    render() {
        const { isAuthenticated,userLogin } = this.props;
        return (
            <header id="headerRoot">
                <div id='nav-bar_left'>
                    <p>homepage</p>
                </div>
                <div id='nav-bar_right'>
                    {
                        !isAuthenticated &&
                        <button className='loginBtn'>login</button>
                    }
                    <p><a href='javascript:void(0)'>content</a></p>
                    <p><a href='javascript:void(0)'>test</a></p>
                    <p><a href='javascript:void(0)'>test1</a></p>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        userLogin: () => dispatch(actions.fetch.login)
    }
}

export default connect(mapStateToProps,{mapDispatchToProps})(Header);