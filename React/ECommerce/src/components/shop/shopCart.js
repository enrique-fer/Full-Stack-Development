import React, { Component } from 'react';
import CartProduct from './cartProduct';
import CartButton from './cartButton';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';

function CartContent({className, products}) {
    let count = products.length;
    let productsJSX = products.map(product => 
        <CartProduct key={product._id} className="cart-content__product" {...product} />
    )

    return (
        <div className={`${className} cart-content`}>
            <div className="cart-content__title">
                Cart ({ count })
            </div>

            <div className="cart-content__products">
                {
                    productsJSX
                }
            </div>

            <CartFooter className="cart-content__footer" products={products} />
        </div>
    )
}

function CartFooter({className, products}) {
    let price = 0; 
    products.map(cProduct => {
        price += cProduct.quantity * cProduct.product.price;
    })

    return (
        <div className={`${className} cart-footer`}>
            <a onClick={() => history.push('/order/review')}className="cart-footer__checkout">
                Checkout
            </a>

            <div className="cart-footer__subtotal">
                Subtotal
            </div>

            <div className="cart-footer__price">
                ${ price }
            </div>
        </div>
    )
}

class ShopCart extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchCartProducts();
    }

    handleAddToCart = () => {
        let element = document.getElementsByClassName('shop-cart')[0];
        
        if (element.classList.contains('cart-hidden')) {
            element.classList.remove('cart-hidden')
        } else {
            element.classList.add('cart-hidden')
        }
    }

    render() {
        const { className } = this.props;
        return (
            <div className={`${className} shop-cart cart-hidden`}>
                <CartButton className="shop-cart__toggle" icon="fas fa-times" onClick={this.handleAddToCart} />

                <CartContent className="shop-cart__content" products={this.props.cartProducts}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        state,
        cartProducts
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;