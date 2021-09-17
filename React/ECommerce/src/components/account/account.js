import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import AccountInformation from './accountInformattion';
import PurchaseHistory from './purchaseHistory';

class Account extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const navbarLinks = [
            {
                _id: 0,
                title: 'Purchase History',
                active: true,
                component: <PurchaseHistory />
            },    
            {
                _id: 1,
                title: 'Account Information',
                active: false,
                component: <AccountInformation />
            }
        ]

        const headerLinks = [
            {
                _id: 0,
                title: 'Shop',
                path: 'shop'
            },
            {
                _id: 1,
                title: 'Logout',
                path: '/signin'
            }
        ]

        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        let jsx;
       
        if (this.props.navbarLinks) {
            this.props.navbarLinks.map(link => {
                if (link.active) {
                    jsx = link.component;
                }
            })
        }

        return jsx;
    }

    render() {
        return (
            <div className="account">
                {
                    this.renderContent()
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { headerlLinks, navbarLinks } = state.headerNavbar;
    return { headerlLinks, navbarLinks };
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;