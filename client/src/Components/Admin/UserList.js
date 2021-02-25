import React, { useState } from 'react'
import UserCard from '../Profile/UserCard'
import { Table, Form } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import UserTab from './UserTab'

const UserList = ({ users }) => {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) =>
                        <UserTab key={user._id} user={user} />)}
                </tbody>
            </Table>
        </div >
    )
}

export default UserList
