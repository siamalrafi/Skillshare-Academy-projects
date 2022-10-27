import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const { googleSignIn, signIn, githubSignIn } = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setSuccess('You are successfully Login');
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
                // ...
            });



    }
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setSuccess('You are successfully Login');
                console.log(user);
                navigate(from, { replace: true })

                // ...
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
                // ...
            }).catch((error) => {
                setError(error)
                console.error(error.message)
            });
    }


    

    return (
        <div className='mt-5 w-75'>
            <div className='mt-5 w-75'>
                <Form onSubmit={handleRegister} >
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='mb-1'>
                        Already have no Account <Link to='/register'>Register</Link>
                    </div>
                    <Button variant="primary" type="submit">
                        Login
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
                            variant="success"> <FaGoogle /> <span>Google Login</span></Button>
                    </div>

                    <div
                        onClick={handleGithubSingIn}
                        className='m-3 rounded'>
                        <Button variant="success"> <FaGithub /> <span>Github Login</span></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;