import React, { useEffect } from 'react';
import DestinationCard from '../Layouts/DestinationCard';
import { useDispatch, useSelector } from 'react-redux'
import { getDestinations } from '../../Redux/Actions/destination';
import Spinner from '../Layouts/Spinner';
import { Link } from 'react-router-dom';


export default function DestinationsList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDestinations())
    }, []);
    const destinations = useSelector(state => state.destination.destinations)
    return (
        <div >
            {/* <div className="hero"> */}
            {/* <div className="intro">
                    <h1 data-aos="fade-up" data-aos-delay="">Travel to the most beautiful places in the world, like <span className="typed-words"></span></h1>
                    <a href="#" className="btn btn-primary" data-aos="fade-up" data-aos-delay="100">Sing-up</a>
                </div> */}
            <div className="slides overlay">
                <iframe autoPlay style={{ position: 'absoulute', zIndex: "-1" }} className='active' width="100%" height="600" src="https://www.youtube.com/embed/OtJVufo3IrA?controls=0;start=2" frameborder="0" allow="'autoplay;' 'accelerometer;'  'clipboard-write;' "></iframe>
            </div><div>
                <Link to='/'><button className='btn btn-dark'>--Back--</button></Link></div>
            {/* </div> */}

            <div className='container' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                {!destinations ? <Spinner /> : destinations.map(destination => <DestinationCard destination={destination} />
                )}
            </div>
        </div>

    );
}