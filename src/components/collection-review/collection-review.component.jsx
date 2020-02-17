import React from 'react';

import styled from 'styled-components';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionReview = ({ title, items }) => (
    <CollectionPreviewStyle>
        <TitleStyle> { title.toUpperCase() } </TitleStyle>
        <PreviewStyle>
            {items
                .filter((item, index) => index < 4)
                .map(
                    ({id, ...otherItemProps}) => (
                        <CollectionItem 
                            key = {id}
                            {...otherItemProps}
                        />
                    )
                )
            }
        </PreviewStyle>
    </CollectionPreviewStyle>
);

export const CollectionPreviewStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const TitleStyle = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`

export const PreviewStyle = styled.div`
    display: flex;
    justify-content: space-between;
`

export default CollectionReview;