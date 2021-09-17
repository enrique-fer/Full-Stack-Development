import React, { Component } from 'react';

import { connect } from 'react-redux';
import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {
    constructor() {
        super();
    }

    render() {
        const { className } = this.props;

        return (
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map(cProduct => {
                        return <ReviewProduct 
                            key={cProduct._id} 
                            {...cProduct}
                        />
                    })
                }
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

ReviewProducts = connect(mapStateToProps)(ReviewProducts);

export default ReviewProducts;