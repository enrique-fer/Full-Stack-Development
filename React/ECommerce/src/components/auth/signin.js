import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';

class SignIn extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        this.props.history.push('/account');
        this.props.signIn(fields);
    }

    render() {
        return (
            <div className="sign-in">
                <PageTitle className="sign-in__page-title" title="Login" />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
            </div>
        );
    }
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;