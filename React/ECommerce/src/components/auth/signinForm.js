import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import Details from '../details';

import { FormInput, FormButton } from '../formFields';


class SignInForm extends Component {
    constructor() {
        super();
    }

    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "Not registered? Create account here",
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: "Forgot account email?",
                onClick: () => console.log("forgot email")
            },
            {
                _id: 2,
                title: "Forgot password",
                onClick: () => console.log("forgot password")
            }
        ];

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' 
                       type="email" 
                       title="Email"
                       placeholder="Email" 
                       name="email"
                       component={FormInput} 
                />
                
                <Field className='sign-in-form__password'
                       type="password" 
                       title="Password"
                       placeholder="Password" 
                       name="password"
                       component={FormInput} 
                />

                <div className='sign-in-form__line'>
                </div>

                <Field className='sign-in-form__login'
                       type="submit"
                       title="Login"
                       name="login"
                       component={FormButton} 
                />

                <Details className="sign-in-form__details" 
                         title="QuickLinks"
                         links={links} 
                />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;