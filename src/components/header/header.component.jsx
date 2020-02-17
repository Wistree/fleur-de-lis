import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link as LinkBase } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import styled from "styled-components";


export const HeaderStyle = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LinkStyle = styled(LinkBase)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsStyle = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionStyle = styled.div`
    padding: 10px 15px;
    cursor: pointer;
`

const Header = ({ currentUser }) => (
    <HeaderStyle>
            {/* cart div */}
            {/* logo div */}
            {/* link div */}

        <LinkStyle to ='/'>
            <Logo className = 'logo' />
        </LinkStyle>

        <OptionsStyle>
            <OptionStyle to = '/shop'> SHOP </OptionStyle>
            <OptionStyle to = '/shop'> CONTACT </OptionStyle>
            {/* another linkw */}
            {/* header height = 1/3 of the screen */}
            {
                currentUser ?
                <OptionStyle onClick = {() => auth.signOut()}>
                    SIGN OUT
                </OptionStyle>
                :
                <OptionStyle to = '/signin'>
                    SIGN IN
                </OptionStyle>
            }
        </OptionsStyle>
    </HeaderStyle>
);


const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);