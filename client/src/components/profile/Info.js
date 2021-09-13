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

const user = Auth.getProfile().data

const Info = () => {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        className: '', 
        bio: ''
    })

    const [selectedDate, handleDateChange] = useState(new Date());

    const [updateUser, { error }] = useMutation(UPDATE_USER_PROFILE);

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    //   };

    // const [subject, setSubject] = useState();

    // const handleSubjectChange = (event) => {
    //     setSubject(event.target.value);
    // };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('selectedDate ->    ', selectedDate)
        console.log('formState ->    ', formState)
        
        Auth.loggedIn()? (console.log(Auth.getProfile().data._id)) : (console.log('NO'))

        console.log(user._id)

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

            // const token = mutationResponse.data.updateUser.token;
            // Auth.login(token);

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

    return ( 
        <VerticalDiv>
            <GlobalStyle/>
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <VerticalDiv>
                <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>My information</h1>
                <p style={{fontSize:'12px', color:'grey'}}>Update your info</p>
                    <TextField id="firstName" label="First Name" color='primary' name="firstName" onChange={handleChange} />
                    <TextField id="lastName" label="Last Name" color='primary' name="lastName" onChange={handleChange} />
                    <TextField id="email" label="Email" color='primary' name="email" onChange={handleChange} />
                    <FormControl style={{minWidth: 190}}>
                    <InputLabel id="subject" >Your class</InputLabel>
                        <Select
                        labelId="subject"
                        id="subject-select"
                        name="className"
                        // value={subject}
                        onChange={handleChange}
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
                        <div style={{width:'80%'}}>
                            {/* <KeyboardDatePicker
                                margin="normal"
                                width={1}
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            /> */}
                            <DatePicker
                                views={["year"]}
                                label="Year graduated"
                                value={selectedDate}
                                onChange={handleDateChange}
                                />
                        </div>
                    </MuiPickersUtilsProvider>
                    <TextField id="linkedin" label="LinkedIn" color='primary' name="linkedIn"  onChange={handleChange} />
                    <TextField id="github" label="GitHub" color='primary' name="gitHub" onChange={handleChange} />
                    <TextField
                    className='input'
                    id="standard-multiline-static"
                    label="Bio"
                    multiline
                    rows={2}
                    name="bio"
                    onChange={handleChange}
                    />
                    <LoginBtn type='submit'>Update</LoginBtn>
                </VerticalDiv>
            </form>
        </VerticalDiv>
     );
};
export default Info;
