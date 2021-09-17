import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';
import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './infoHelp';

class PaymentForm extends Component {
    constructor() {
        super();
    }

    render() {
        const { className, handleSubmit } = this.props;
       

        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__card-name' 
                       type="cardName" 
                       title="Name on Credit Card"
                       placeholder="Name on Credit Card" 
                       name="cardName"
                       component={FormInput} 
                />

                <Field className='payment-form__card-number'
                       type="cardNumber" 
                       title="Credit Card Number"
                       placeholder="___-___-___-___" 
                       name="cardNumber"
                       component={FormInput} 
                />

                <Field className='payment-form__expiration-date'
                       type="expirationDate" 
                       title="Expiration Date"
                       placeholder="MM/YYYY" 
                       name="expiration Date"
                       component={FormInput} 
                />

                <Field className='payment-form__ccvv'
                       type="ccvv" 
                       title="CCVV"
                       placeholder="CCVV" 
                       name="ccvv"
                       component={FormInput} 
                />

                <div className='payment-form__line'>
                </div>

                <Field className='payment-form__pay'
                       onClick={() => history.push('/information/payment')}
                       type="submit"
                       title="Pay and Complete Order"
                       name="pay"
                       component={FormButton} 
                />

                <Field className='payment-form__back'
                       onClick={() => history.push('/shop')}
                       type="submit"
                       title="Back"
                       name="back"
                       short={true}
                       component={FormButton} 
                />

                <OrderSummary className="payment-form__order-summary" />

                <div className="payment-form__shipping-info shipping-info">
                    <UnderlinedTitle className="shipping-info__title" title="Shipping To" />

                    <div className="shipping-info__name small-text">
                        {this.props.name}
                    </div>

                    <div className="shipping-info__address small-text">
                        {this.props.address}
                    </div>
                </div>
            </form>
        );
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

function mapStateToProps(state) {
    const { name, address } = state.user.user;

    return {
        name,
        address
    }
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm;