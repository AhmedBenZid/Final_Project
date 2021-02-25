import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap'
import { addDestination } from '../../Redux/Actions/destination';

const EditDestination = ({ destination }) => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(destination && destination.title)
    const [description, setDescription] = useState(destination && destination.description)
    const [city, setCity] = useState(destination && destination.city)
    const [imgUrl, setImgUrl] = useState(destination && destination.imgUrl)
    const [rate, setRate] = useState(destination && destination.rate);
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggle = () => {
        handleClose()
    }

    const handeleSave = () => {
        const editedDestination = {
            title,
            description,
            city,
            imgUrl,
            rate
        }
        dispatch(addDestination(editedDestination));
        toggle();
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit
      </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Destination:</Modal.Title>
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
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Rate</Form.Label>
                        <Form.Control value={rate} disabled type="text" />
                    </Form.Group>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Description</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" value={description} aria-label="With textarea" onChange={e => setDescription(e.target.value)} />
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

export default EditDestination
