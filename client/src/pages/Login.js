import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle from './global.style';
import { VerticalDiv } from './Landing';
import { LoginBtn } from './Landing';
import { SignUpBtn } from './Landing';
import { BackArrow } from '../components/icons.styles'
import logo from '../images/logo.png';
import TextField from '@material-ui/core/TextField';

const Login = () => {
    return ( 
        <VerticalDiv>
            <GlobalStyle/>
            <Link to='/'>
                <BackArrow className="fas fa-arrow-left"></BackArrow>
            </Link>
            <img src={logo}  alt="logo images" height='200px' width='50%'/>
            <h1 style={{fontSize:'37px', margin:'0'}}>Hello!</h1>
            <p style={{fontSize:'15px'}}>Plase <span style={{color:'#51BBB9',fontWeight:'bold'}}>Login </span>to use AlumnSpace</p>
            <form noValidate autoComplete="off">
                <VerticalDiv>
                    <TextField id="username" label="Username" color='primary' />
                    <TextField id="password" label="Password" color='primary' type='password' />
                    <LoginBtn textColor='white' backgroundColor='#51BBB9' type='Submit' style={{marginTop:'20px'}}>Login</LoginBtn>
                    <Link to='/signup'>
                        <SignUpBtn textColor='#707070' backgroundColor='#EDEDED'>Sign up</SignUpBtn>
                    </Link>
                </VerticalDiv>
            </form>

        </VerticalDiv>
     );
}
 
export default Login;