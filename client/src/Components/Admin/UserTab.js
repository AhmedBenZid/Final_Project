import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Table, Form } from 'react-bootstrap'
import { editUser, deleteUser } from '../../Redux/Actions/auth'
import EditUser from './EditeUser'


const UserTab = ({ user }) => {
    const [newRole, setNewRole] = useState(user && user.role)

    const [edit, setEdit] = useState(true)
    const dispatch = useDispatch();

    // const handleEdit = () => {
    //     setEdit(!edit)
    // }
    const handelDelete = (id) => {
        dispatch(deleteUser(id))
    }
    // const handleSave = (id, role) => {
    //     dispatch(editUser(id, role))
    //     setEdit(!edit);
    // }
    return (
        <tr>
            <td>{user._id}</td>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
            <td> {user.role}</td>
            <td> <EditUser user={user} /></td>
            <td ><buton className='btn btn-danger'>Delete</buton></td>
        </tr>
    )
}

export default UserTab
