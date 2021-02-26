import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const DemandeCircuit = ({ circuit }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const isAuth = useSelector(state => state.authReducer.isAuth)


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                START JOURNEY
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{circuit && circuit.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {(!isAuth) ? <Link to='/register'><Button varianr="primary">Sing-up</Button></Link> :
                        <Form className='mb-4'>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Travler</Form.Label>
                                <Form.Control type="number" min='1' />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <label for="example-date-input" class="col-2 col-form-label">Date</label>
                                    <div class="col-10">
                                        <input className="form-control" type="date" value="2011-08-19" id="example-date-input" />
                                    </div>
                                </Col>
                                <Col>
                                    <Form.Label>Type</Form.Label>
                                    <Form.Control placeholder="Last name" as='select' >
                                        <option value='friendTrip' >FriendTrip</option>
                                        <option value='birthday'>Birthday</option>
                                        <option value='honeyMoon'>HoneyMoon</option>
                                        <option value='adventure'>Adventure</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Form>}
                    <h6>Rules:</h6>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Book
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DemandeCircuit
