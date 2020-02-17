import React from 'react';
import './custom-button.style.scss';

// conditional render a className based on a props
// we able to do this because in React, everything in JS
// doing this, we able to use className `google-sign-in' if the codition is true, if not it will be an empty string, and `custom-button` will always be rendered
const CustomButton = ({ children, isGoogleSignIn ,...otherProps }) => (
    <button className = {`${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} { ...otherProps } >
        { children }
    </button>
);

export default CustomButton;