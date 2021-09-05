import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import styled from 'styled-components';
import GlobalStyle from '../components/global.style';

 export const VerticalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 37px;
    font-family: 'Besley, serif';
    margin: 0;
`

export const LoginBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 15px;
    color: ${(props)=>props.textColor};
    background-color: ${(props)=> props.backgroundColor};
    border: none;
    border-radius: 5px;
    padding: 5px 50px;
    margin: 20px 0;

    &:hover {
        background-color: #FF8985;
        color: black;
    }
`

export const SignUpBtn = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 15px;
    color: ${(props)=>props.textColor};
    background-color: ${(props)=> props.backgroundColor};
    border: none;
    border-radius: 5px;
    padding: 5px 43px;
    
    &:hover {
        background-color: #FF8985;
        color: black;
    }
`

const Landing = () => {
    return ( 
        <VerticalDiv>
            <GlobalStyle/> 
            <img src={logo}  alt="logo images" height='20%' width='90%'/>
            <Title>AlumSpace</Title>
            <p style={{textAlign:'center', fontFamily: 'Montserrat, sans-serif'}}> A place for coding bootcamp Alumni to connect  with each other <br/> and share ideas.</p>
            <Link to="/login">
                <LoginBtn textColor='white' backgroundColor='#51BBB9'>
                    Login
                </LoginBtn>
            </Link>
            <Link to="/signup">
                <SignUpBtn textColor='#707070' backgroundColor='#EDEDED'>
                    Sign up
                </SignUpBtn>
            </Link>
        </VerticalDiv>
     );
}
 
export default Landing;
