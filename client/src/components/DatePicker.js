// import 'date-fns';
// import React from 'react';
// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';


// export default function MaterialUIPickers() {
//     const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
//     const handleDateChange = (date) => {
//       setSelectedDate(date);
//     };
  
//     return (
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//           <KeyboardDatePicker
//             margin="normal"
//             id="date-picker-dialog"
//             label="Date picker dialog"
//             format="MM/dd/yyyy"
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//               'aria-label': 'change date',
//             }}
//           />
//       </MuiPickersUtilsProvider>
//     );
//   }