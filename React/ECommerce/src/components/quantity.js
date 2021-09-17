import React, { Component } from 'react';

class Quantity extends Component {
    constructor() {
        super();
    }

    render() {
        const { className, quantity } = this.props;

        return (
            <div className={`${className} quantity`}>
                <div className="quantity__count">
                    { quantity }
                </div>

                <div className="quantity__plus">
                    <i className="fas fa-plus" />
                </div>

                <div className="quantity__minus">
                    <i className="fas fa-minus" />
                </div>
            </div>
        );
    }
}

export default Quantity;