import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../Redux/Actions/auth';

const EditUser = ({ user }) => {
    const [newRole, setNewRole] = useState(user && user.role)
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const handleClose = () => setModal(false);
    const dispatch = useDispatch()

    const handleSave = () => {
        dispatch(editUser(user._id, newRole));
        toggle();
    }
    console.log(newRole)
    const admin = useSelector(state => state.authReducer.user.role)

    return (
        <div>
            <Button color="danger" onClick={toggle}>Edit</Button>

            <Modal show={modal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                {admin !== 'admin' ?
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> :
                    <Modal.Body>
                        <Form.Control as="select" onChange={(e) => setNewRole(e.target.value)}>
                            <option value='guide'>Guide</option>
                            <option value='user'>User</option>
                        </Form.Control>
                    </Modal.Body>}

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                   </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                   </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default EditUser;