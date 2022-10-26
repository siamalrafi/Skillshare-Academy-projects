import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../../Context/UserContext';
import './Header.css';





const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        return logOut()
    }

    // console.log(user);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='text-light'>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                        <b className='h5'> Skillshare Academy</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/courses"><b className='h6'>Courses</b></Nav.Link>
                            <Nav.Link href="/"><b className='h6'>Dark-Theme</b></Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="/faq"><b className='h6'>FAQ</b></Nav.Link>
                            <Nav.Link href="/blog"><b className='h6'>Blog</b></Nav.Link>
                            {
                                user && user.uid ?
                                    <>
                                        <Nav.Link
                                            onClick={handleLogOut}
                                        >
                                            Log Out
                                        </Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link href="/login">
                                            Login
                                        </Nav.Link>
                                        <Nav.Link href="/register">
                                            Register
                                        </Nav.Link>

                                    </>
                            }

                            <Nav.Link href="/profile"><b className='h6'>
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
                                                title={'Please Login'}
                                                icon={faUser}></FontAwesomeIcon>
                                        </>
                                }

                            </b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;