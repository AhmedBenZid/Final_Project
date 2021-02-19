import React, { useEffect } from 'react'
import {
    Card
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { getDestinationId } from '../../Redux/Actions/destination';

const Destination = ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDestinationId(match.params.id))
    }, [input])

    return (
        <div>
            <Card>
                <Card.Img variant="top" src='' />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
      </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Destination
