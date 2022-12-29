// import React from 'react'
// import { useState } from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// const DateTimePicker = () => {
//     const [value, setValue] = useState(null)
//     return (
//         <div>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DateTimePicker
//                     renderInput={(props) => <TextField {...props} />}
//                     label="DateTimePicker"
//                     value={value}
//                     onChange={(newValue) => {
//                         setValue(newValue);
//                     }}
//                 />
//             </LocalizationProvider></div>
//     )
// }

// export default DateTimePicker