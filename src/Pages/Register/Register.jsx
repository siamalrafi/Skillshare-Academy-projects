import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';



const Register = () => {
    const { user, createUser, nameUpdate, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();


    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                nameUpdate(name)
                    .then(() => {
                        // Profile updated
                        console.log('Profile updated!');
                        setSuccess('You are successfully Create your Account')
                        // ...
                    }).catch((error) => {
                        console.error(error);
                        setError(error.message)
                    });
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
                // ..
            });

    }

    const handleGoogleSignIn = () => {
        // console.log('ljdfljs');

        googleSignIn()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setSuccess('You are successfully Create your Account')
                console.log(user);
                // ...
            })
            .catch((error) => {
                setError(error)
                console.error(error.message)
            })
    }

    // console.log(user);

    return (
        <div className='mt-5 w-75'>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" >
                    <Form.Label> Name </Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div>
                    Already have a Account <Link to='/login'>Login</Link>
                </div>


                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <div className=" text-success h4 ">
                    {
                        success ?
                            <>
                                {success}
                            </>
                            :
                            <>
                                {error}
                            </>
                    }
                </div>
            </Form>
            <div className='m-5 d-flextext-center'>
                <div
                    onClick={handleGoogleSignIn}
                    className='m-3 rounded'>
                    <Button
                        variant="success"> <FaGoogle /> <span>Google Sign Up</span></Button>
                </div>

                <div className='m-3 rounded'>
                    <Button variant="success"> <FaGithub /> <span>Github Sign Up</span></Button>
                </div>
            </div>
        </div>
    );
};

export default Register;