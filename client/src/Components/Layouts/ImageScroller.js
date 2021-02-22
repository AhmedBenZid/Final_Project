
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard'

// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageScroller = () => {

    return (
        <div className="untree_co-section" >
            <div className="container">
                <div className="row text-center justify-content-center mb-5">
                    <div className="col-lg-7"><h2 className="section-title text-center">Popular Destination</h2></div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Link><DestinationCard /></Link>
                    <DestinationCard />
                    <DestinationCard />
                </div>
            </div>
        </div>
    );
};

export default ImageScroller;