// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
// import DateTimePicker from './DateTimePicker';
// import DateFnsUtils from '@date-io/date-fns/build/date-fns-utils';
// import DateTimeMUI from './DateTimeMUI';
// import DateTimePicker from './DateTimePicker';
// ========================================
// import DateFnsUtils from '@date-io/date-fns'; // choose your lib
// import {
//     DateTimePicker,
//     MuiPickersUtilsProvider,
//     alpha
// } from '@material-ui/pickers';
// =================================

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from "react";
import NavBar from './NavBar';
import dayjs from "dayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { TextField } from "@mui/material"
import { useEffect } from 'react';
const Provider = () => {
    // const [selectedDate, handleDateChange] = useState(new Date());
    // const [selectedDate, handleDateChange] = useState(null);

    const [provider, setProvider] = useState({
        providerName: "",
        golfName: "",
        coordinates: "",
        price: null,
        numberOfSlots: null,
        selectedDate: Date.now()
    })


    const handleChange = (e) => {
        setProvider(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        console.log(provider)
    }, [provider])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(provider)
    }
    // console.log("Select a provider", provider.selectedDate.$d)
    return (
        <>
            <NavBar />

            <div className='container m-5 d-flex justify-content-center align-items-center'>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Provider name</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="text"
                                placeholder="Provider name"
                                name='providerName'
                                value={provider.providerName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Golf Course name</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="text"
                                placeholder="Enter Golf Course name"
                                name='golfName'
                                value={provider.golfName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Golf Course coordinates</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="text"
                                placeholder="Enter your coordinates "
                                name='coordinates'
                                value={provider.coordinates}
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="number"
                                placeholder="Enter price"
                                name='price'
                                value={provider.price}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Number of slot</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="number"
                                placeholder="Number of slot"
                                name='numberOfSlots'
                                value={provider.numberOfSlots}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <div style={{ width: "500px" }}>
                            {/* <label htmlFor="">Pick the date and time</label> <br /> */}
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                            {/* <DateTimePicker value={selectedDate} onChange={handleDateChange} /> */}
                            {/* <DateTimePicker value={provider.selectedDate} onChange={handleChange} name="selectedDate" /> */}
                            {/* </MuiPickersUtilsProvider> */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Select Ticket Date and Time"
                                    value={provider.selectedDate}
                                    onChange={(newValue) => {
                                        setProvider(prev => ({ ...prev, selectedDate: newValue }));
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                    </Row>

                    <Button variant="primary" type="submit">
                        Provider Whistle
                    </Button>
                </Form>

                <Row>

                </Row>

            </div >
        </>
    )
}

export default Provider