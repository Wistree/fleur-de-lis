import React, { Component } from 'react';
import './directory.style.scss';
import CATEGORIES_DATA from './directory.data';

import Category from '../category/category.component';

class Directory extends Component {
    constructor (props) {
        super(props)

    this.state = {
        categories: CATEGORIES_DATA
    }};

    render () {
        return (
            <div className = 'directory'>
                {this.state.categories.map(
                    ({ id, ...otherCateProps }) => (
                        <Category 
                            key = {id}
                            { ...otherCateProps }
                        />
                    )
                )}
            </div>
        )
    };
};

export default Directory;