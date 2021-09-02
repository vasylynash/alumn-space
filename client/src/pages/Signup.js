import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
// styled components
import GlobalStyle from './global.style';
import { VerticalDiv } from './Landing';
import { LoginBtn } from './Landing';
import { SignUpBtn } from './Landing';


const Signup = () => {
    return ( 
        <VerticalDiv>
            <GlobalStyle/>
            <img src={logo}  alt="logo images" height='200px' width='50%'/>
            <h1 style={{fontSize:'37px', margin:'0'}}>Welcome!</h1>
            <p style={{fontSize:'15px'}}><span style={{color:'#51BBB9',fontWeight:'bold'}}>Sign up </span>to use AlumnSpace</p>

        </VerticalDiv>
     );
}
 
export default Signup;