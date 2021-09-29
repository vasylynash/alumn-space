import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import Hero from '../images/hero-graphic.png';
import styled from 'styled-components';
import GlobalStyle from '../components/global.style';

 export const VerticalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: ease-in-out 0.1s;

    img {
        max-width: 25rem;
    }

    .description {
        display: block;
    }

    .cta {
        display: none;
    }

    .mobileTitle {
            display: block;
        }

        .signupImg {
            max-height: 50vh;
            min-height: 10vh;
            max-width: 20vw;
            min-width: 50vw;
        }

    @media (min-width: 768px) {
        background-color: #CECFD1;
        padding-top: 10vh;
        width: 35vw;
        height: 100vh;
        float: right;
        flex-shrink: 0;
        box-shadow: 0px 3px  13px black;

        img {
            min-height: 10vh;
            max-width: 20vw;
            min-width: 20vw;
        }

        .signupImg {
            max-height: 30vh;
            min-height: 10vh;
            max-width: 20vw;
            min-width: 10vw;
        }

        .description {
            display: none;
        }

        .cta {
            display: block;
            font-size: 20px;
            font-weight: bold;
        }

        .mobileTitle {
            display: none;
        }
    } 
`

export const Title = styled.h1`
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
    transition: ease-in-out 0.3s;

    @media (min-width: 768px) {
        font-size: 20px;
    }

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
    padding: 5px 40px;
    transition: ease-in-out 0.3s;

    @media (min-width: 768px) {
        font-size: 20px;
    }
    
    &:hover {
        background-color: #FF8985;
        color: black;
    }
`

export const HeroContainer = styled.div`
 display: none;

 @media (min-width: 768px) {
     display: flex;
     flex-direction: column;
     width: 55vw;
     float: left;

     .desktopTitle {
         text-align: center;
         font-size:60px;
         margin-top: 10vh;
         color: #707070;
     }

     .desktopDescription {
         font-size: 25px;
         padding: 0 20px;
     }

 }
`

const Landing = () => {
    return ( 
        <>
        <div style={{display:'block',float:'left'}}>
            <HeroContainer>
            <Title className='desktopTitle'>AlumnSpace</Title>
            <img src={Hero}  alt="logo images"/>
            <p style={{textAlign:'center', fontFamily: 'Montserrat, sans-serif'}} className='desktopDescription'> A place for coding bootcamp Alumni to connect  with each other and share ideas.</p>
            </HeroContainer>
        </div>
        <LandingContainer>
            <GlobalStyle/>
            <img src={Logo}  alt="logo images"/>
            <Title className='mobileTitle'>AlumnSpace</Title>
            <p style={{textAlign:'center', fontFamily: 'Montserrat, sans-serif'}} className='description'> A place for coding bootcamp Alumni to connect  with each other <br/> and share ideas.</p>
            <p style={{textAlign:'center', fontFamily: 'Montserrat, sans-serif', padding:'0 30px'}} className='cta'> Please login or signup to continue.</p>
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
        </LandingContainer>
        </>
     );
}
 
export default Landing;
