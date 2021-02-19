import React, { useEffect } from 'react';
import { CardGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDestinations } from '../../Redux/Actions/destination';
import Destination from '../Pages/DestinationsList';



const MainSection = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDestinations())
    }, [])
    const destinations = useSelector(state => state.destination.destinations)
    return (
        <>
            <div style={{
                backgroundImage: `url(img/main.jpg)`,
                backgroundRepeat: 'no-repeat',
                width: "100pc",
                height: '50pc'
            }}>
                <div className='container text-danger' >
                    <h1 className='mx-auto' style={{ paddingTop: '20%' }}>Tunisia - Discover our best Destination</h1>
                    <Form.Group>
                        <Form.Control as="select" className='bg-primary text-white col-2 mx-auto'>
                            {destinations.map(destination => <option key={destination._id}>{destination.title}</option>)}
                        </Form.Control>
                    </Form.Group>
                </div>
            </div>
            <div>
                <CardGroup>
                    {destinations.map((destination) => (<Destination key={destination._id} destination={destination} />))}
                </CardGroup>
            </div>
        </>
    )
}

export default MainSection
