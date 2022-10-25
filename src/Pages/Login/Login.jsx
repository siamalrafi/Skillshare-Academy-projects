import { faCake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';



const Login = () => {
    return (
        <div className='mt-5 w-75'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Name </Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="m-5">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
            <div className='m-4 text-center'>
                <Button className='m-3'>
                    <FontAwesomeIcon icon={faCake}></FontAwesomeIcon>
                </Button>
                <Button className='m-3'>
                    <FontAwesomeIcon icon={faCake}></FontAwesomeIcon>
                </Button>
            </div>
        </div>
    );
};

export default Login;