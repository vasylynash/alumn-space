import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import GlobalStyle from '../pages/global.style';
import Burger from './Burger';

const Nav = styled.nav`
    width: 100%;
    height: 50px;
    display: inline-flex;
    background-color: #E0E0E0;
    justify-content: space-between;

    .logo {
        padding:5px;
    }
`


const Navbar = () => {
    return ( 
        <Nav>
            <GlobalStyle/>
            <div className="logo">
                <img src={logo}  alt="logo images" height='40px' width='40px'/>
            </div>
            <Burger/>
        </Nav>
    );
}
 
export default Navbar;