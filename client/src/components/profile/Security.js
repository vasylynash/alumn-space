import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { LoginBtn, VerticalDiv } from '../../pages/Landing';
import { Line } from '../posts/SearchPost';

function Security() {
    const [disabledStatus, setDisabledStatus] = useState(true);
    const [buttonText, setButtonText] = useState('Change');
    const [submitStatus, setSubmitStatus] = useState('button');
    const [display, setDisplay] = useState('none');

    const [usernameDisabledStatus, setUsernameDisabledStatus] = useState(true);
    const [usernameButtonText, setUsernameButtonText] = useState('Change');
    const [usernameSubmitStatus, setUsernameSubmitStatus] = useState ('button');

    const handleDisableChange = (event) => {
        event.preventDefault();
        setDisabledStatus(false);
        setButtonText('Update');
        setSubmitStatus('Submit');
        setDisplay('block');

        if (disabledStatus === false) {
            setDisabledStatus(true);
            setButtonText('Change');
            setSubmitStatus('button');
            setDisplay('none')
        };
    };

    const handleUsernameDisableChange = (event) => {
        event.preventDefault();
        setUsernameDisabledStatus(false);
        setUsernameButtonText('Update');
        setUsernameSubmitStatus('Submit');

        if (usernameDisabledStatus === false) {
            setUsernameDisabledStatus(true);
            setUsernameButtonText('Change');
            setUsernameSubmitStatus('button');
        };
    };

    return (
        <>
            <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>Security</h1>
            <p style={{fontSize:'12px', color:'grey'}}>Change your usernmae and passowrd</p>
            <form>
                <VerticalDiv>
                    <h2 style={{fontSize:'20px', marginTop:'1rem'}}>Change username</h2>
                    <TextField disabled={usernameDisabledStatus} id="username" label="Username" color='primary' />
                    <LoginBtn onClick={handleUsernameDisableChange} type= {usernameSubmitStatus}>{usernameButtonText}</LoginBtn>
                </VerticalDiv>
            </form>
            <Line/>
            <form>
                <VerticalDiv>
                    <h2 style={{fontSize:'20px', marginTop:'1rem'}}>Change password</h2>
                    <TextField id="password" label="Password" color='primary' type='password' style={{display}} />
                    <TextField id="confirmPassword" label="Confirm password" color='primary' type='password' style={{display}}/>
                    <LoginBtn onClick={handleDisableChange} type= {submitStatus}>{buttonText}</LoginBtn>
                </VerticalDiv>
            </form>
        </>
    );
};

export default Security;
