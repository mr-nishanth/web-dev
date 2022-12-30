// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
// import DateTimePicker from './DateTimePicker';
// import DateFnsUtils from '@date-io/date-fns/build/date-fns-utils';
// import DateTimeMUI from './DateTimeMUI';
// import DateTimePicker from './DateTimePicker';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from "react";
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Consumer = () => {
    const initialState = {
        consumerName: "",
        coordinates: "",
        email: "",
        mobileNumber: "",
        alertRadius: "",
        expireTime: ""
    }
    const [consumer, setConsumer] = useState(initialState)

    const navigate = useNavigate();

    const notify = (message) => {
        console.log("Notification : ", message)
        toast(message)
    };

    const handleChange = (e) => {
        setConsumer(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // useEffect(() => {
    //     console.log(consumer)
    // }, [consumer])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(consumer)
        if (!consumer.consumerName || !consumer.coordinates || !consumer.email
            || !consumer.mobileNumber || !consumer.alertRadius || !consumer.expireTime) return notify("Please consumer a details")
        return await axios.post(`http://localhost:3500/consumer/create`, consumer)
            .then((response) => {
                // console.log(`Search : ${response.data}`)
                console.log("Add user" + response.data.message)
                notify(response.data.message)
                // navigate("/dashboard")
                setConsumer(initialState)
            })
            .catch((error) => console.log(error))


    }
    return (
        <div>
            <NavBar />

            <div className='container m-5 d-flex justify-content-center align-items-center'>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Consumer Name</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="text"
                                placeholder="Enter your name "
                                name='consumerName'
                                value={consumer.consumerName}
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Consumer coordinates</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="text"
                                placeholder="Enter your coordinates "
                                name='coordinates'
                                value={consumer.coordinates}
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="email"
                                placeholder="Enter your email "
                                name='email'
                                value={consumer.email}
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Mobile number</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="text"
                                placeholder="Enter your mobile number "
                                name='mobileNumber'
                                value={consumer.mobileNumber}
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Alert Radius</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="number"
                                placeholder="Enter your alert radius "
                                name='alertRadius'
                                value={consumer.alertRadius}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Expire time</Form.Label>
                            <Form.Control
                                style={{ width: "500px" }}
                                type="number"
                                placeholder="Enter your expire time "
                                name='expireTime'
                                value={consumer.expireTime}
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Consumer Whistle
                    </Button>
                    <ToastContainer />
                </Form>

            </div>
        </div>
    )
}

export default Consumer