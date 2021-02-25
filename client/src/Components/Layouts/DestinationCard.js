import React from 'react'
import { Card } from 'react-bootstrap';
import Spinner from './Spinner';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const DestinationCard = ({ destination }) => {
    return (<>
        {!destination ? <Spinner /> :
            <div style={{ width: '350px' }}>
                <Card className="m-4 border">
                    <Card.Img src={destination.imgUrl} alt="Card image" style={{ height: '400px', borderRadius: 10 }} />
                    <Card.ImgOverlay>
                        <Card.Title className='text-white'><b>{destination.title}</b></Card.Title>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="read-only" value={destination.rate} readOnly />
                        </Box>
                    </Card.ImgOverlay>
                </Card>
            </div>}
    </>
    )
}

export default DestinationCard
