import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle from '../components/global.style';
import { HeroContainer, LandingContainer, VerticalDiv } from './Landing';
import { LoginBtn } from './Landing';
import { SignUpBtn } from './Landing';
import { BackArrow } from '../components/icons.styles'
import Logo from '../images/logo.png';
import TextField from '@material-ui/core/TextField';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Hero from '../images/hero-graphic.png'
import { Title } from './Landing'

const Login = (props) => {
const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return ( 
      <>
        <HeroContainer>
          <Title className='desktopTitle'>AlumSpace</Title>
          <img src={Hero}  alt="logo images"/>
          <p style={{textAlign:'center', fontFamily: 'Montserrat, sans-serif'}} className='desktopDescription'> A place for coding bootcamp Alumni to connect  with each other and share ideas.</p>
        </HeroContainer>
          <LandingContainer>
            <GlobalStyle/>
            <Link to='/'>
                <BackArrow className="fas fa-arrow-left" left='5vw'></BackArrow>
            </Link>
            <img src={Logo}  alt="logo images"/>
            <h1 style={{fontSize:'37px', margin:'0'}}>Hello!</h1>
            <p style={{fontSize:'15px'}}>Please <span style={{color:'#51BBB9',fontWeight:'bold'}}>login </span>to use AlumnSpace</p>
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <VerticalDiv>
                    <TextField id="email" name="email" label="Email" color='primary' onChange={handleChange}/>
                    <TextField id="password" name="password" label="Password" color='primary' type='password' onChange={handleChange}/>
                    <LoginBtn textColor='white' backgroundColor='#51BBB9' type='Submit' style={{marginTop:'20px'}}>Login</LoginBtn>
                    <Link to='/signup'>
                        <SignUpBtn textColor='#707070' backgroundColor='#EDEDED'>Sign up</SignUpBtn>
                    </Link>
                </VerticalDiv>
            </form>
            </LandingContainer>
      </>
     );
}
 
export default Login;