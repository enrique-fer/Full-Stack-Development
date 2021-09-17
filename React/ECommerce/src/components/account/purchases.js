import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Purchases extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchUserPurchases();
    }

    render() {
        const { className } = this.props;

        return (
            <div className={`purchases ${className}`}>
                {
                    this.props.purchases.map(purchase => {
                        return (
                            <a key={purchase._id} className="purchases__purchase purchase" onClick={() => this.props.setPurchaseDetail(purchase._id)}>
                                <img className="purchase__img" src="http://via.placeholder.com/80x80" />
                            </a>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { purchases } = state.user;
    return { purchases };
}

Purchases = connect(mapStateToProps, actions)(Purchases);

export default Purchases;