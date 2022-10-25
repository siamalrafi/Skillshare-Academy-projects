import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Cards = ({ coures }) => {
    const { id, title, author, details, rating, thumbnail_url } = coures;
    console.log(coures);
    console.log(title);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    className='img-fluid rounded h-50 w-full'
                    variant="top"
                    src={thumbnail_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;