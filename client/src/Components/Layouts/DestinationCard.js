import React from 'react'
import { Card } from 'react-bootstrap'
const DestinationCard = () => {
    return (
        <div>
            <Card className="bg-dark text-white m-4">
                <Card.Img src="./img/home.jpg" alt="Card image" style={{ height: '400px' }} />
                <Card.ImgOverlay>
                    <Card.Title>Destination Name</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default DestinationCard
