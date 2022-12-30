import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Accordion from 'react-bootstrap/Accordion';
const MatchWhistle = () => {
    const [match, setMatch] = useState([])
    // const [consumers, setConsumers] = useState([])
    const [matchConsumers, setMatchConsumers] = useState([])
    useEffect(() => {
        loadProviderData()

    }, [])

    const loadProviderData = async () => {

        return await axios.get("http://localhost:3500/whistle/match")
            .then((response) => setMatch(response.data.matchWhistle))
            .catch(err => console.log(err))

    }
    const getConsumer = async (id) => {

        return await axios.get(`http://localhost:3500/whistle/consumer/${id}`)
            .then((response) => setMatchConsumers(response.data.consumers))
            .catch(err => console.log(err))

    }
    console.log(matchConsumers)

    return (
        <>
            <NavBar />

            <div className='container m-5 d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <Row>
                            <Col xs='12'>
                                <h1 className='text-center'>
                                    {
                                        match.length >= 1 ? (
                                            <div>
                                                {
                                                    match.map(provider => {
                                                        return (
                                                            <div key={provider._id}>
                                                                <hr />
                                                                <h5>Provider Name: {provider.providerName}</h5>
                                                                <h6>Gold Course Name: {provider.golfName.toUpperCase()}</h6>
                                                                <h6>Price: {provider.price}</h6>
                                                                <h6>No of Slot: {provider.numberOfSlots}</h6>
                                                                <h6>Date: {String(provider.selectedDate).split("T")[0]}</h6>
                                                                <h6>Time: {String(provider.selectedDate).split("T")[1].replace(".000Z", "")}</h6>
                                                                <button type='button' className='btn btn-bg-success btn-danger' onClick={() => getConsumer(provider._id)}>Get Match Consumer</button>
                                                                <hr />
                                                            </div>
                                                        )
                                                    })

                                                }
                                            </div>
                                        ) : null

                                    }
                                </h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className='text-center'>
                                    {
                                        matchConsumers.length >= 1 ? (
                                            <>
                                                {

                                                    matchConsumers.map(consumer => {
                                                        return (
                                                            <Accordion defaultActiveKey="0">
                                                                {/* consumerName: "",
                                                                    coordinates: "",
                                                                    email: "",
                                                                    mobileNumber: "",
                                                                    alertRadius: "",
                                                                    expireTime: "" */}
                                                                <Accordion.Item eventKey={consumer._id}>
                                                                    <Accordion.Header>{consumer.consumerName.toUpperCase()}</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <h4>{consumer.email}</h4>
                                                                        <h4>{consumer.mobileNumber}</h4>
                                                                        <button type='button' className='btn btn-success'>Send Message</button>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>

                                                            </Accordion>
                                                        )
                                                    })

                                                }
                                            </>
                                        ) : null

                                    }
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchWhistle

{/* {
                            match && match?.matchWhistle.map(provider => {
                                return (
                                    <h1 key={provider.golfName}></h1>
                                )
                            })
                        } */}