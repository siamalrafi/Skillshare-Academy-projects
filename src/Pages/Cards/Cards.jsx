import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Cards = ({ coures }) => {
    const { id, title, author, details, rating, thumbnail_url } = coures;
    // console.log(id);


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
                        {details.slice(0, 200) + '...'}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className='d-flex justify-content-between'>
                        <div>
                            <p className='h6'>
                                <b>Author : {author}</b></p >
                        </div>
                        <div>
                            <p >
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                {rating}
                            </p>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body className='d-flex justify-content-between'>
                    <Link to={`/details/${id}`}>
                        <Button variant="success">Course Details</Button>{' '}
                    </Link>


                    <Link to={`/premium/${id}`}>
                        <Button variant="success">   Get Premium</Button>{' '}
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;