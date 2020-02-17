import React from 'react';
import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

// it is a higher order component that let us modify ur component to have access to things that relates to redux, then return you a new souped-up component

// higher component is a func that take component as an arg and then return u a new soup-up component
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
    <div className = 'header'>
        <Link className = 'logo-container' to = '/'>
            <Logo className = 'logo' />
        </Link>

        <div className = 'options'>
            <Link className = 'option' to = '/shop'> SHOP </Link>
            <Link className = 'option' to = '/shop'> CONTACT </Link>
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

// this function connect to the root reducer

// this func allows us to access the state
// the state is the root reducer
// so we want to root reducer, we want the user value
// this name can be anything but mapStateToProps is standard with redux codebases 

// state is map to component props by mapStateToProps, is updated by reducer and is kept in the store
// u pass in the state to the currentUser and return the obj, that obj of currentUser will go to the Header component
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

// the 1st args of the connect is the func that help u pass the state, with the state being ur reducer

// connect returns us a another higher function, we then pass our Header component to that second function as an arg which will return us our modified version of Header 
// this pattern is called currying  
export default connect(mapStateToProps)(Header);