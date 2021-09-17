import React, { Component } from 'react';
import { InfoTitle, UnderlinedTitle } from './infoHelp';

import { connect } from 'react-redux';

class OrderSummary extends Component {
    constructor() {
        super();
    }

    render() {
        const { className } = this.props;

        let subtotal = 0;
        let tax = 0.16;
        let amtStickers = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
            amtStickers += cartProduct.quantity;
        })

        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle classname="order-summary__title" title="Order Summary" />

                <InfoTitle className="order-summary__subtotal" title={`${amtStickers} stickers`} value={`$${subtotal}`} />

                <InfoTitle className="order-summary__tax-shipping" title="Taxes & Shipping" value={`$${tax}`} />

                <InfoTitle className="order-summary__total info-title-green" title="Total" value={`$${subtotal + tax}`} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts } 
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;