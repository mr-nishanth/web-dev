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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
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
import { useNavigate } from 'react-router-dom';
const Provider = () => {
    // const [selectedDate, handleDateChange] = useState(new Date());
    // const [selectedDate, handleDateChange] = useState(null);

    const initialState = {
        providerName: "",
        golfName: "",
        coordinates: "",
        price: "",
        numberOfSlots: "",
        selectedDate: Date.now()
    }
    const [provider, setProvider] = useState(initialState)


    const navigate = useNavigate();

    const notify = (message) => {
        console.log("Notification : ", message)
        toast(message)
    };

    const handleChange = (e) => {
        setProvider(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // useEffect(() => {
    //     console.log(provider)
    // }, [provider])

    const handleSubmit = async (e) => {
        // console.log(`Date time ${typeof provider.selectedDate}`)
        // console.log(`Date  ${new Date(new Date(provider.selectedDate).toLocaleString())}`)
        // console.log(`Date  Type : ${typeof new Date(new Date(provider.selectedDate).toLocaleString())}`)
        e.preventDefault()
        console.log(provider)
        // if (!provider.providerName || !provider.golfName || !provider.coordinates
        //     || !provider.price || !provider.numberOfSlots || !provider.selectedDate) return notify("Please provider a details ...")
        return await axios.post(`http://localhost:3500/provider/create`, provider)
            .then((response) => {
                // console.log(`Search : ${response.data}`)
                // console.log("Add user" + response.data.message)
                notify(response.data.message)
                // navigate("/dashboard")
                // setProvider(initialState)
            })
            .catch((error) => console.log(error))

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
                    <ToastContainer />
                </Form>

                <Row>

                </Row>

            </div >
        </>
    )
}

export default Provider