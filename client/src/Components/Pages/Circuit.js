import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../Layouts/Spinner'


const Circuit = ({ match }) => {
    const circuits = useSelector(state => state.circuitReducer.circuits)
    const circuit = circuits.find(el => el._id === match.params.id)

    return (
        !circuit ? <Spinner /> :
            <div className='m-4 container'>
                <div>
                    <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
                        <div className="mr-4">
                            <img style={{ width: '249px', height: '249px', borderRadius: "20px" }} src="img/HistoricalTour.jpg" alt='Cover' />
                        </div>
                        <h1>{circuit.title}</h1>
                    </div>
                    <div>
                        <h2>{circuit && circuit.user && circuit.user.firstName} {circuit.user.lastName} </h2>
                    </div>
                    <div className='m-4'>
                        <h4>Description</h4>
                        <p>{circuit.description}</p>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div >
    )
}

export default Circuit
