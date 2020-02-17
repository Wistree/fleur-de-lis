import React from 'react';

import styled from 'styled-components';

const CollectionItem = ({ name, imageUrl, price }) => (
    <CollectionItemStyle>
        <ImageStyle style={{backgroundImage: `url(${imageUrl})`}}/>
        <CollectionFooterStyle >
            <NameStyle> {name.toUpperCase()} </NameStyle>
            <PriceStyle> {price} </PriceStyle>
        </CollectionFooterStyle>
    </CollectionItemStyle>
);

export const CollectionItemStyle = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
`

export const ImageStyle = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`

export const CollectionFooterStyle = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`
export const NameStyle = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const PriceStyle = styled.span`
    width: 10%;
`

export default CollectionItem;