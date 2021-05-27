import React from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
// import RegularButton from '../../ui/Button';

const NavBarLinks = ['Home', 'Solution']

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const UL = styled.ul`
    display: inline-block;
    margin-left: 20px;
`

const NavLinkList = styled.li`
    display: inline;
    margin-right: 20px;
`
const RegisterButton = styled.a`
    @media (max-width: 582px) {
        display: none;
    }
`



const NavBar = () => {
    return (
        <div className="nk-header nk-header-fixed is-light">
            <div className="container">
                <div className="nk-header-wrap">
                    <FlexContainer>
                        <a href="/"><img src={'/static/images/logo-nav.png'} alt="Logo Nav" style={{ width: "70px", height: "40px" }} /></a>
                        <UL>
                            {NavBarLinks.map(link => <a href="/" key={link}><NavLinkList>{link}</NavLinkList></a>)}
                        </UL>
                    </FlexContainer>
                    <div className="nk-header-tools">
                        <a href="/login" className="btn btn-outline-secondary mr-2">Sign In</a>
                        <RegisterButton href="/register" className="btn btn-primary">Get Started</RegisterButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;