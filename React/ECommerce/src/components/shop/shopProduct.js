import React, { Component } from 'react';
import GreenPriceTag from '../greenPriceTag';
import Quantity from '../quantity';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class ShopProduct extends Component {
    constructor() {
        super();
    }

    handleAddToCart = () => {
        let element = document.getElementsByClassName('shop-cart')[0];
        
        if (element.classList.contains('cart-hidden')) {
            element.classList.remove('cart-hidden');

            const { _id, title, description, price, belongsTo } = this.props;
            this.props.addCartProduct({ _id, title, description, price, belongsTo });
        } else {
            element.classList.add('cart-hidden')
        }
    }

    render() {
        const { _id, title, description, price } = this.props;

        return (
            <div className='shop-product'>
                <div className="shop-product__front">
                    <img className="shop-product__front__image" src="http://via.placeholder.com/220x220" />
                    
                    <div className="shop-product__front__title">
                        { title }
                    </div>
                </div>

                <div className="shop-product__back">
                    <div className='shop-product__back__title'> 
                        { title }
                    </div>

                    <div className='shop-product__back__description'>
                        { description }
                    </div>

                    <GreenPriceTag className="shop-product__back__price" title={price} /> 

                    <Quantity className="shop-product__back__quantity" quantity={1} />

                    <a onClick={this.handleAddToCart} className="shop-product__back__add-to-cart">
                        Add to cart
                    </a>
                </div>
            </div>
        );
    }
}

ShopProduct = connect(null, actions)(ShopProduct);

export default ShopProduct;