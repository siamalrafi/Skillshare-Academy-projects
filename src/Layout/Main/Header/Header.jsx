import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
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
                            <Nav.Link href="/blog"><b className='h6'>Blog</b></Nav.Link>

                            <Nav.Link href="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link href="/register">
                                Register
                            </Nav.Link>



                            <Nav.Link href="/profile">
                                Profle
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;