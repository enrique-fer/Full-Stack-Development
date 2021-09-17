import React, { Component } from 'react';

class GreenPriceTag extends Component {
    constructor() {
        super();
    }

    render() {
        const { className, title } = this.props;

        return (
            <div className={`${className} green-price-tag`}>
               ${ title }
            </div>
        );
    }
}

export default GreenPriceTag;