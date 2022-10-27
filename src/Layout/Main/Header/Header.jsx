import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../../Context/UserContext';
import './Header.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';


const Header = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Lignt', value: '1' },
        { name: 'Dark', value: '2' },
    ];
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        return logOut()
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='text-light'>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon className='text-danger h4' icon={faGraduationCap}></FontAwesomeIcon>
                        <b className='h5 ms-2'><b>Skillshare Academy</b></b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/courses"><b className='h5'>Courses</b></Nav.Link>
                            <Nav.Link href="/blog"><b className='h5'>Blog</b></Nav.Link>
                            <Nav.Link href="/faq"><b className='h5'>FAQ</b></Nav.Link>
                        </Nav>
                        <Nav.Link href="/">
                            <ButtonGroup className='me-5'>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Nav.Link>

                        <Nav>
                            {
                                user && user.uid ?
                                    <>
                                        <Nav.Link
                                            onClick={handleLogOut}
                                        >
                                            <Button variant="warning " ><b>Log Out</b></Button>{' '}

                                        </Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link href="/login">
                                            <b className='h5'>Login</b>
                                        </Nav.Link>
                                        <Nav.Link href="/register">
                                            <b className='h5'>Register</b>
                                        </Nav.Link>
                                    </>
                            }

                            <Nav.Link href="/"><b className='h6'>
                                {
                                    user?.photoURL && user?.displayName ?
                                        <>
                                            <img
                                                title={user?.displayName}
                                                className='profile-img rounded-circle'
                                                src={user?.photoURL} alt="userphotho" />
                                        </>
                                        :
                                        <>
                                            <FontAwesomeIcon
                                                className='text-white'
                                                title={user?.displayName}
                                                icon={faUser}></FontAwesomeIcon>
                                        </>
                                }
                            </b>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;