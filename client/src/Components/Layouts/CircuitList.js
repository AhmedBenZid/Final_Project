import React from 'react'
import CircuitCard from './CircuitCard'

const CircuitList = () => {
    return (
        <div className="untree_co-section" >
            <div className="container">
                <div className="row text-center justify-content-center mb-5">
                    <div className="col-lg-7"><h2 className="section-title text-center">Popular Ciruits</h2></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <CircuitCard />
                    <CircuitCard />
                    <CircuitCard />
                </div>
            </div></div>
    )
}

export default CircuitList
