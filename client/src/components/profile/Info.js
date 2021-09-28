import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { LoginBtn, VerticalDiv } from '../../pages/Landing';
import GlobalStyle from '../global.style';
import {  useMutation } from '@apollo/client';
import { UPDATE_USER_PROFILE } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import styled from 'styled-components'; 
import CircularProgress from '@material-ui/core/CircularProgress';

const FormContainer = styled.div`
    .textfield {
        margin-top: 10px;
    }
`

const Info = () => {
    const user = Auth.getProfile().data;
    
    const { loading, err, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { id: user._id }
    });

    const [disabledStatus, setDisabledStatus] = useState(true);
    const [buttonText, setButtonText] = useState('Change');
    const [submitStatus, setSubmitStatus] = useState ('button')

    const [formState, setFormState] = useState({
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        className: data.user.className, 
        bio: data.user.bio,
        linkedIn: data.user.linkedIn,
        gitHub: data.user.gitHub,
    });

    const [selectedDate, handleDateChange] = useState(new Date(parseInt(data.user.yearOfGraduation)).toDateString());

    const [updateUser, { error }] = useMutation(UPDATE_USER_PROFILE);

    if (loading) {
        return <CircularProgress color="secondary" />;
      }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const mutationResponse = await updateUser ({
                variables: {
                    id: user._id,
                    firstName: formState.firstName,
                    lastName: formState.lastName,
                    email: formState.email,
                    className: formState.className,
                    yearOfGraduation: selectedDate,
                    linkedIn: formState.linkedIn,
                    gitHub: formState.gitHub,
                    bio: formState.bio
                },
            });

        } catch (e) {
            console.error(e);
        }
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }; 

    const handleDisableChange = (event) => {
        // event.preventDefault();
        setDisabledStatus(false);
        setButtonText('Update');
        setSubmitStatus('button');

        if (disabledStatus === false) {
            setDisabledStatus(true);
            setButtonText('Change');
            setSubmitStatus('submit');
        };
    };

    return ( 
        <VerticalDiv>
            <GlobalStyle/>
            <form noValidate autoComplete='off' onSubmit={handleFormSubmit}>
                <FormContainer>
                <VerticalDiv>
                <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>My information</h1>
                <p style={{fontSize:'12px', color:'grey'}}>Update your information</p>
                    <TextField  className='textfield' disabled={disabledStatus} value={formState.firstName} id='firstName' label='First Name' color='primary' onChange={handleChange} name='firstName' />
                    <TextField className='textfield' disabled={disabledStatus} value={formState.lastName} id='lastName' label='Last Name' color='primary' onChange={handleChange} name='lastName' />
                    <FormControl disabled={disabledStatus} style={{minWidth: 190}}>
                    <InputLabel id='subject' >Your subject</InputLabel>
                        <Select
                        labelId='subject'
                        id='subject-select'
                        name='className'
                        onChange={handleChange}
                        value={formState.className}
                        >
                        <MenuItem value={'Web Development'}>Web Development</MenuItem>
                        <MenuItem value={'Data Analytics'}>Data Analytics</MenuItem>
                        <MenuItem value={'UX/UI Design'}>UX/UI Design</MenuItem>
                        <MenuItem value={'Cybersecurity'}>Cybersecurity</MenuItem>
                        <MenuItem value={'FinTech'}>FinTech</MenuItem>
                        <MenuItem value={'Digital Marketing'}>Digital Marketing</MenuItem>
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div style={{width:'100%', marginTop:'20px', marginLeft:'15px'}}>
                            <DatePicker
                                views={['year']}
                                label='Year graduated'
                                value={selectedDate}
                                onChange={handleDateChange}
                                disabled={disabledStatus}
                                />
                        </div>
                    </MuiPickersUtilsProvider>
                    <TextField className='textfield' value={formState.linkedIn} id='linkedin' label='LinkedIn' color='primary' name='linkedIn'  onChange={handleChange} disabled={disabledStatus} />
                    <TextField className='textfield' value={formState.gitHub} id='github' label='GitHub' color='primary' name='gitHub' onChange={handleChange} disabled={disabledStatus} />
                    <TextField
                    disabled={disabledStatus}
                    value={formState.bio}
                    className='input textfield'
                    id='standard-multiline-static'
                    label='Bio'
                    multiline
                    rows={2}
                    name='bio'
                    onChange={handleChange}
                    />
                    <LoginBtn onClick={handleDisableChange} type={submitStatus}>{buttonText}</LoginBtn>
                </VerticalDiv>
                </FormContainer>
            </form>
        </VerticalDiv>
     );
};

export default Info;
