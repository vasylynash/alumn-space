import React from 'react'
import TextField from '@material-ui/core/TextField';
import { LoginBtn, VerticalDiv } from '../../pages/Landing';
import { Line } from '../posts/SearchPost';


function Security() {
    return (
        <>
            <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>Security</h1>
            <p style={{fontSize:'12px', color:'grey'}}>Change your usernmae and passowrd</p>
            <Line/>
            <form>
                <VerticalDiv>
                    <h2 style={{fontSize:'20px', marginTop:'1rem'}}>Change username</h2>
                    <TextField id="username" label="Username" color='primary' />
                    <LoginBtn type='submit'>Change</LoginBtn>
                </VerticalDiv>
            </form>
            <Line/>
            <form>
                <VerticalDiv>
                    <h2 style={{fontSize:'20px', marginTop:'1rem'}}>Change password</h2>
                    <TextField id="password" label="Password" color='primary' type='password' />
                    <TextField id="confirmPassword" label="Confirm password" color='primary' type='password'/>
                    <LoginBtn type='submit'>Change</LoginBtn>
                </VerticalDiv>
            </form>
        </>
    )
}

export default Security
