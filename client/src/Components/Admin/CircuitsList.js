import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeCircuit } from '../../Redux/Actions/circuit'
const DestinationsList = ({ circuits }) => {
    const dispatch = useDispatch();
    const handleDelete = (cirId) => {
        dispatch(removeCircuit(cirId));
        console.log('hhhhhh')
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

                    </tr>
                </thead>
                <tbody>
                    {circuits && circuits.map(circuit =>
                        <tr key={circuit._id}>
                            <td>{circuit._id}</td>
                            <td>{circuit.title}</td>
                            <td>{circuit.city}</td>
                            <td>{circuit.user}</td>
                            <td> <button className='btn-danger btn' onClick={() => handleDelete(circuit._id)}>Delete</button></td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default DestinationsList
