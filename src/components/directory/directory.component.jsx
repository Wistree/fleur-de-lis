import React, { Component } from 'react';
import CATEGORIES_DATA from './directory.data';

import styled from 'styled-components';
import Category from '../category/category.component';

export const DirectoryStyle = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

class Directory extends Component {
    constructor (props) {
        super(props)

    this.state = {
        categories: CATEGORIES_DATA
    }};

    render () {
        return (
            <DirectoryStyle>
                {this.state.categories.map(
                    ({ id, ...otherCateProps }) => (
                        <Category 
                            key = {id}
                            { ...otherCateProps }
                        />
                    )
                )}
            </DirectoryStyle>
        )
    };
};

export default Directory;