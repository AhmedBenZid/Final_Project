import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, logout } from '../../Redux/Actions/auth';
import UserList from './UserList';
import DestinationsList from './DestinationsList';
import AddDestination from './AddDestination';
import CircuitsList from './CircuitsList';
import { useHistory } from 'react-router-dom'
import { getCircuits } from '../../Redux/Actions/circuit'
import Spinner from '../Layouts/Spinner'


const AdminDashboard = () => {


    const history = useHistory();
    const dispatch = useDispatch();
    const logOut = () => {

        history.push('./')


    }
    const getUsers = () => {
        dispatch(getAllUsers());
    }

    const getCir = () => {
        dispatch(getCircuits());
    }
    const users = useSelector(state => state.authReducer.users);
    const destinations = useSelector(state => state.destination.destinations);
    const circuits = useSelector(state => state.circuitReducer.circuits)
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const user = useSelector(state => state.authReducer.user)
    console.log(circuits)
    if (!isAuth) {
        return <Spinner />
    }




    return (
        <>
            <Nav className='container m-4 mx-auto' variant="pills" >
                <Nav.Item>
                    <Nav.Link eventKey="1" onClick={getUsers}>
                        Users
              </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2">
                        Destinations
              </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" onClick={getCir} >
                        Circuits
              </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4" onClick={logOut} >
                        Home
              </Nav.Link>
                </Nav.Item>

            </Nav>
            <div><h3>Welcome {user.firstName} {user.lastName}</h3></div>
            {({ users }) ? <div className='container' ><h4>Users:</h4> <UserList users={users} /></div> : null
            }
            {{ destinations } ? <div className='container' >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", margin: '10px' }}>
                    <h4>Destinations:</h4>
                    <AddDestination />
                </div> <DestinationsList destinations={destinations} /></div> : null
            }
            {
                { circuits } ? <div className='container' ><h4>Circuits:</h4> <CircuitsList circuits={circuits} /></div> : null
            }
        </>
    );
}

export default AdminDashboard
