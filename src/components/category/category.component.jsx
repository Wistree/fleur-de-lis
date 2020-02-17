import React from 'react';
import './category.style.scss';

const Category = ({ title, imageUrl, linkUrl, size }) => (
    <div 
        className = {`${size} category`}
    >
        <div 
            className = 'background-image'
            style = {{backgroundImage: `url(${imageUrl})`}}
        />
        <div className = 'content'>
            <h1 className = 'title'> {title.toUpperCase()} </h1>
            <span className = 'subtitle'> SHOP NOW </span>
        </div>
    </div>
);

export default Category;