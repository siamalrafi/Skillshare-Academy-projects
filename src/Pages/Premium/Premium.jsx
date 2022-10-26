import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const Premium = () => {

    const course = useLoaderData([]);
    const { id, title, author, courseFee, details, rating, thumbnail_url } = course;


    console.log(title);

    return (
        <div>
            <Card className="mt-5">
                <div>
                    <Card.Img variant="top" src={thumbnail_url} />
                </div>
                <Card.Body>
                    <div className='text-center h2'>
                        <Card.Title>{title}</Card.Title>
                    </div>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <hr />
                    <ListGroup.Item className='d-flex justify-content-between'>
                        <div>
                            <b>
                                <p className='h6'>Author : {author}</p >
                            </b>                        </div>
                        <div>
                            <b>
                                <p className='h6'>Course Fee : ${courseFee}</p >
                            </b>
                        </div>
                        <div>
                            <b>
                                {
                                    rating >= 4 ?
                                        <>
                                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                        </>
                                        :
                                        <>
                                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                        </>
                                }
                                {rating}
                            </b>
                        </div>
                    </ListGroup.Item>
                    <hr />

                    <div className='text-center'>
                        <Link>
                            <Button variant="primary">Download</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Premium;




