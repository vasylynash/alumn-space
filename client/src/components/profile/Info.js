import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { LoginBtn, VerticalDiv } from '../../pages/Landing';
import GlobalStyle from '../global.style';

const Info = () => {

    const [selectedDate, setSelectedDate] = useState(new Date('2021-01-01T21:11:54'));
    const [subject, setSubject] = useState();
    const [disabledStatus, setDisabledStatus] = useState(true);
    const [buttonText, setButtonText] = useState('Change');
    const [submitStatus, setSubmitStatus] = useState ('button')

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleDisableChange = (event) => {
        event.preventDefault();
        setDisabledStatus(false);
        setButtonText('Update');
        setSubmitStatus('Submit');

        if (disabledStatus === false) {
            setDisabledStatus(true);
            setButtonText('Change');
            setSubmitStatus('button');
        };
    };

    return ( 
        <VerticalDiv>
            <GlobalStyle/>
            <form noValidate autoComplete="off">
                <VerticalDiv>
                <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>My information</h1>
                <p style={{fontSize:'12px', color:'grey'}}>Update your info</p>
                    <TextField disabled={disabledStatus} id="firstName" label="First Name" color='primary' />
                    <TextField disabled={disabledStatus} id="lastName" label="Last Name" color='primary' />
                    <TextField disabled={disabledStatus} id="email" label="Email" color='primary' />
                    <FormControl disabled={disabledStatus} style={{minWidth: 190}}>
                    <InputLabel id="subject" >Your subject</InputLabel>
                        <Select
                        labelId="subject"
                        id="subject-select"
                        value={subject}
                        onChange={handleSubjectChange}
                        >
                        <MenuItem value={1}>subject1</MenuItem>
                        <MenuItem value={2}>subject2</MenuItem>
                        <MenuItem value={3}>subject3</MenuItem>
                        <MenuItem value={4}>subject4</MenuItem>
                        <MenuItem value={5}>subject5</MenuItem>
                        <MenuItem value={6}>subject6</MenuItem>
                        <MenuItem value={7}>subject7</MenuItem>
                        <MenuItem value={8}>subject8</MenuItem>
                        <MenuItem value={9}>subject9</MenuItem>
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div style={{width:'80%'}}>
                            <KeyboardDatePicker
                                disabled={disabledStatus}
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
                            />
                        </div>
                    </MuiPickersUtilsProvider>
                    <TextField
                    disabled={disabledStatus}
                    className='input'
                    id="standard-multiline-static"
                    label="Bio"
                    multiline
                    rows={2}
                    />
                    <LoginBtn onClick={handleDisableChange} type= {submitStatus}>{buttonText}</LoginBtn>
                </VerticalDiv>
            </form>
        </VerticalDiv>
     );
};
export default Info;
