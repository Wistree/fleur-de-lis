import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

import CollectionReview from '../../components/collection-review/collection-review.component';

class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: SHOP_DATA
        }
    };

    render() {
        return (
            <div>
                {this.state.data.map(
                    ({ id, ...otherRevProps }) => (
                        <CollectionReview 
                            key = {id}
                            {...otherRevProps}
                        />
                    )
                )}
            </div>
        )
    }
};

export default Shop;