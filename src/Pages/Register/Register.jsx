import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {

    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    // const [passwordError, setpasswordError] = useState("");
    // const [emailError, setemailError] = useState("");

    // const handleValidation = (event) => {
    //     let formIsValid = true;

    //     if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    //         formIsValid = false;
    //         setemailError("Email Not Valid");
    //         return false;
    //     } else {
    //         setemailError("");
    //         formIsValid = true;
    //     }

    //     if (!password.match(/^[a-zA-Z]{8,22}$/)) {
    //         formIsValid = false;
    //         setpasswordError(
    //             "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
    //         );
    //         return false;
    //     } else {
    //         setpasswordError("");
    //         formIsValid = true;
    //     }
    // };

    const handleRegister = () => {
        console.log('lsjflsj');
    }
    return (
        <Form onSubmit={handleRegister} >
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



    );
};

export default Register;