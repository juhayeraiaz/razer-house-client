import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo.png'
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top' className='p-3'>
                <Container>
                    <Navbar.Brand as={Link} to='home'><img
                        src={logo}
                        width='220px'
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='mt-4 text-center mt-md-0'>
                            <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to='items'>Items</Nav.Link>
                            <Nav.Link as={Link} to='about'>About</Nav.Link>
                            {
                                user ?
                                    <div>
                                        <img className='rounded-circle' src={user.photoURL} width='35px' alt="" />
                                        <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Log out</button>
                                    </div>


                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;