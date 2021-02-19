import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function Destination({ destination }) {

    return (
        ({ destination }) &&
        <Card className="bg-dark text-white" style={{ height: "400px" }}>
            <Link to={`/destination/${destination._id}`} >
                <Card.Img src={destination.imgUrl} alt="Card image" />
            </Link>
            <Card.Body>
                <Card.Title>{destination.title}</Card.Title>
                <Card.Text>
                    {destination.description}
                </Card.Text>
            </Card.Body>

        </Card >

    );
}