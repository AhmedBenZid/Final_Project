import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap'
import { addDestination } from '../../Redux/Actions/destination';

const AddDestination = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [rate, setRate] = useState(1);
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggle = () => {
        setTitle('');
        setDescription('');
        setCity('');
        setImgUrl('');
        setRate(1)
        handleClose()
    }

    const handeleSave = () => {
        const newDestination = {
            title,
            description,
            city,
            imgUrl,
            rate
        }
        dispatch(addDestination(newDestination));
        toggle();
    }
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add Destination
      </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Destination:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={title} type="email" placeholder="Enter email" onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>city</Form.Label>
                        <Form.Control value={city} type="text" placeholder="City" onChange={e => setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control value={imgUrl} type="text" onChange={(e) => setImgUrl(e.target.value)} />
                    </Form.Group>



                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={description} as="textarea" aria-label="With textarea" onChange={e => setDescription(e.target.value)} />
                    </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handeleSave}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default AddDestination
