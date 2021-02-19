import React from 'react'
import {
    Button,
    Modal,
} from 'react-bootstrap'

const AddCircuit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create a Trip
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Title" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Places ex: Madina, Carthage..." />
                        </Col>
                    </Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Trip description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddCircuit