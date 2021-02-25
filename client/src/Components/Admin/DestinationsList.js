import React from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteDestination } from '../../Redux/Actions/destination';
import EditDestination from './EditDestination';

const DestinationsList = ({ destinations }) => {
    const dispatch = useDispatch();
    const delDestination = (des_id) => {
        dispatch(deleteDestination(des_id))
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Image</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {destinations && destinations.map(destination =>
                        <tr key={destination._id}>
                            <td>{destination._id}</td>
                            <td>{destination.title}</td>
                            <td>{destination.city}</td>
                            <td>{destination.imgUrl}</td>
                            <td> <button className='btn-danger btn' onClick={() => delDestination(destination._id)}>Delete</button></td>
                            <td ><EditDestination destination={destination} /></td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default DestinationsList
