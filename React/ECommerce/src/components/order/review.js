import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        let subtotal = 0;
        this.props.cartProducts.map(cProduct => {
            subtotal += cProduct.quantity * cProduct.product.price;
        })
        
        return (
            <div className="review">
                <PageTitle  className="review__page-title" title="Order Review" />

                <ReviewForm 
                    className="review__form" 
                    handleSubmit={this.onSubmit} 
                    subtotal={subtotal}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;

    return {
        cartProducts
    }
}

Review = connect(mapStateToProps, actions)(Review);

export default Review;