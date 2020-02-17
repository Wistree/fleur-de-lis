import React from 'react';
import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
    <div className = 'header'>
        <div>
            {/* cart div */}
            {/* logo div */}
            {/* link div */}
        </div>

        <Link className = 'logo-container' to = '/'>
            <Logo className = 'logo' />
        </Link>

        <div className = 'options'>
            <Link className = 'option' to = '/shop'> SHOP </Link>
            <Link className = 'option' to = '/shop'> CONTACT </Link>
            {/* another linkw */}
            {/* header height = 1/3 of the screen */}
            {
                currentUser ?
                <div className = 'option' onClick = {() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className = 'option' to = '/signin'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
);


const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);