import {Navbar, Nav, Container } from "react-bootstrap";
// import { FaSignInAlt, FaSignOutAlt } from 'react-icons';
// import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>

                <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                    <Container>
                            <Navbar.Brand>MERN Auth</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ms-auto'>

                                    <Nav.Link>
                                        Sign In
                                    </Nav.Link>
                                    <Nav.Link>
                                        Sign Up
                                    </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        </header>
    );
};

export default Header;