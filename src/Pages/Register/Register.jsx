import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';



const Register = () => {
    const { user, createUser, nameUpdate, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();


    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURLa = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                nameUpdate(name, photoURLa)
                    .then(() => {
                        console.log('Profile updated!');
                        setSuccess('You are successfully Create your Account')
                    }).catch((error) => {
                        console.error(error);
                        setError(error.message)
                    });
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
            });
    }

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess('You are successfully Create your Account')
                console.log(user);
            })
            .catch((error) => {
                setError(error)
                console.error(error.message)
            })
    }
    const handleGithubSingIn = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess('You are successfully Create your Account')
                console.log(user);
            }).catch((error) => {
                setError(error)
                console.error(error.message)
            });
    }

    const handleAccept = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='mt-5 w-75'>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" >
                    <Form.Label> Name </Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label> PhotoURL </Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccept}
                        type="checkbox"
                        label={<>Accept <Link to='trams'>Trams and Condition</Link></>} />
                </Form.Group>
                <div>
                    Already have a Account <Link to='/login'>Login</Link>
                </div>
                <Button variant="primary" type="submit" disabled={!accepted}>
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

                <div
                    onClick={handleGithubSingIn}
                    className='m-3 rounded'>
                    <Button variant="success"> <FaGithub /> <span>Github Sign Up</span></Button>
                </div>
            </div>
        </div>
    );
};

export default Register;