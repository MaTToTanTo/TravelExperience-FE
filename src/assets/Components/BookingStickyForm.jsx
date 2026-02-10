import "../css/BookingStickyForm.css"
import { useEffect,useState } from "react"
import {Box,Paper, Select} from "@mui/material"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function BookingStickyForm(){
    const [tempBooking, setTempBooking] = useState({});
    
    
    
    return (
        <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Paper className="sticky-container" elevation="5">
            <DatePicker className="Date"
            defaultValue={dayjs()}
            label="Select a date"
            />
            <Select className="adult"
            name="adult"
            value={tempBooking.person}
            /*onChange={HandleformChange}*/
            />

        </Paper>
        </LocalizationProvider>
        </>
        
    )
}
export default BookingStickyForm