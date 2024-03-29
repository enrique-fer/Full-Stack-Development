import React, { Component } from 'react';

import { connect } from 'react-redux';
import PurchaseHistory from './purchaseHistory';

class PurchaseDetail extends Component {
    constructor() {
        super();
    }

    render() {
        const { 
            className, 
            orderNumber,
            orderDate,
            total, 
            creditCard, 
            user 
        } = this.props;
        
        const { name, shippingAddress } = user;

        return (
            <div className={`purchase-detail ${className}`}>
                <PurchaseDetailLabel 
                    className="purchase-detail__order-number"
                    title="Order Number"
                    value={orderNumber}
                />
                    
                <PurchaseDetailLabel 
                    className="purchase-detail__order-date" 
                    title="Order Date"
                    value={orderDate}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__shipping-address"
                    title="Shipping Address" 
                    value={`${name}\n${shippingAddress}`}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__total"
                    title="Total" 
                    value={total}
                />

                <PurchaseDetailLabel 
                    className="purchase-detail__credit-card"
                    title="Credit Card" 
                    value={creditCard}
                />

                <a className="purchase-detail__track-shipment">Track Shipment</a>
                <a className="purchase-detail__print-receipt">Print Receipt</a>
            </div>
        );
    }
}

function PurchaseDetailLabel ({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className="purchase-detail-label__title">
                {title}
            </div>

            <div className="purchase-detail-label__value">
                {value}
            </div>         
        </div>
    )
}

function mapStateToProps(state) {
    const { purchaseDetail } = state.user;
    return {
        ...purchaseDetail
    }
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;