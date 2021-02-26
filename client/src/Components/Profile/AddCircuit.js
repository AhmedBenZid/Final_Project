import React, { useState } from 'react'
import {
    Button,
    Modal,
    Form,
    Col
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { addCircuit } from '../../Redux/Actions/circuit'

const AddCircuit = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')
    const [places, setPlaces] = useState('')
    const [destination, setDestination] = useState('')
    const [price, setPrice] = useState(0)
    const [imgUrl, setImgUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const destinations = useSelector(state => state.destination.destinations)


    const dispatch = useDispatch()

    const handleSave = () => {
        const newCircuit = {
            title,
            places,
            destination,
            price,
            imgUrl,
            description
        }
        dispatch(addCircuit(newCircuit));
        console.log('hhhhh')
        setTitle('');
        setDescription('');
        setPrice(0);
        setImgUrl('');
        setPlaces('');
        setDestination('')
        setShow(false)
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create a Trip
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-4 m-2'>
                    <Form.Row className='mb-2'>
                        <Col>
                            <Form.Control placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Places ex: Madina, Carthage..." value={places} onChange={e => setPlaces(e.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row className='mb-2'>
                        <Col>
                            <Form.Control as="select" value={destination} onChange={e => setDestination(e.target.value)}>
                                {(destinations && destinations.map(destination =>
                                    <option value={destination._id}>{destination.title}</option>))
                                }</Form.Control>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Control placeholder="Image Url" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
                    </Form.Row>
                    <Form.Group controlId="description" >
                        <Form.Label>Trip description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value)} />
                    </Form.Group></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCircuit