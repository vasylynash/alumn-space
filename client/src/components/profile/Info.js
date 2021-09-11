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

import { fromPromise, useMutation } from '@apollo/client';
import { UPDATE_USER_PROFILE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const Info = () => {

    console.log('this.props ->      ', this.props)

    // const [formState, setFormState] = useState({
    //     firstName = 
    //     lastName = 
    //     email = 
    //     className = 
    //     yearOfGraduation = 
    //     bio = 
    // })

    const [selectedDate, setSelectedDate] = useState(new Date('2021-01-01T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const [subject, setSubject] = useState();

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    return ( 
        <VerticalDiv>
            <GlobalStyle/>
            <form noValidate autoComplete="off">
                <VerticalDiv>
                <h1 style={{fontSize:'25px', margin:'0', color:'#51BBB9'}}>My information</h1>
                <p style={{fontSize:'12px', color:'grey'}}>Update your info</p>
                    <TextField id="firstName" label="First Name" color='primary' />
                    <TextField id="lastName" label="Last Name" color='primary' />
                    <TextField id="email" label="Email" color='primary' />
                    <FormControl style={{minWidth: 190}}>
                    <InputLabel id="subject" >Your subject</InputLabel>
                        <Select
                        labelId="subject"
                        id="subject-select"
                        value={subject}
                        onChange={handleSubjectChange}
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
                                label="Year only"
                                value={selectedDate}
                                onChange={handleDateChange}
                                />
                        </div>
                    </MuiPickersUtilsProvider>
                    <TextField
                    className='input'
                    id="standard-multiline-static"
                    label="Bio"
                    multiline
                    rows={2}
                    />
                    <LoginBtn type='submit'>Update</LoginBtn>
                </VerticalDiv>
            </form>
        </VerticalDiv>
     );
};
export default Info;
