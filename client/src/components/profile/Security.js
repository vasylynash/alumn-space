import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { LoginBtn, VerticalDiv } from '../../pages/Landing';
import { Line } from '../posts/SearchPost';
import {  useMutation } from '@apollo/client';
import { CHANGE_PASSWORD } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Security() {

    const user = Auth.getProfile().data

    const [disabledStatus, setDisabledStatus] = useState(true);
    const [buttonText, setButtonText] = useState('Change');
    const [submitStatus, setSubmitStatus] = useState('button');
    const [display, setDisplay] = useState('none');


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

    const [passwordState, setPasswordState] = useState({
        password: '',
        confirmPassword: ''
    });

    const [changePassword, { error }]=useMutation(CHANGE_PASSWORD);

    const handleChangePasswordFormSubmit = async (event) => {
        event.preventDefault();

        try {

            const mutationResponse = await changePassword ({
                variables: {
                    id: user._id,
                    password: passwordState.password,
                    confirmPassword: passwordState.confirmPassword
                },
            });
        } catch (e) {
            console.error(e);
        }
    }

    const handlePasswordChange = (event) => {
        console.log('in handle password change')
        const { name, value } = event.target;

        setPasswordState({
            ...passwordState,
            [name]: value,
        });
    };

    return (
        <>
            <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>Security</h1>
            <p style={{fontSize:'12px', color:'grey'}}>Change your passowrd</p>
            <form onSubmit={handleChangePasswordFormSubmit}>
                <VerticalDiv>
                    <h2 style={{fontSize:'20px', marginTop:'1rem'}}>Change password</h2>
                    <TextField id="password" label="New password" color='primary' type='password' style={{display}} name='password' onChange={handlePasswordChange} />
                    <TextField id="confirmPassword" label="Confirm new password" color='primary' type='password' style={{display}} name='confirmPassword' onChange={handlePasswordChange} />
                    <LoginBtn onClick={handleDisableChange} type= {submitStatus}>{buttonText}</LoginBtn>
                </VerticalDiv>
            </form>
        </>
    );
};

export default Security;
