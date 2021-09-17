import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import CartButton from './cartButton';
import ShopCart from './shopCart';
import ShopProduct from './shopProduct';
import ShopSearchBar from './shopSearchBar';

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            showCart: true
        }
    }

    componentDidMount() {
        
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]

        this.props.fetchShopCategories(); 
        this.props.setNavbarLinks(this.props.categories);
        
        this.props.setHeaderLinks(headerLinks);

        this.props.fetchShopProducts();
        //set header links
        //fetch shop products action creator
        //fetch navbar links
            //set navbar links
    }

    shouldComponentUpdate(nextProps) {
        if (this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true;
    }

    onSubmit = (fields) => {
        console.log(fields);
        this.props.filterProductsWithQuery(fields);
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
        // return <ShopCart className="shop__cart" />

        return (
            <div className="shop">
                <ShopSearchBar onSubmit={this.onSubmit} className="shop__search-bar" />
                
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product=> {
                            return (
                              <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>
                {
                    this.state.showCart ? <ShopCart className="shop__cart" /> : ''
                }

                <CartButton onClick={this.handleAddToCart} className="shop__cart-button" icon='fas fa-shopping-cart' />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop;
    
    return { 
        categories,
        filteredProducts
    }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;