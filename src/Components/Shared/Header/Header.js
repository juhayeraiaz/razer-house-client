import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo.png'
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
const Header = () => {
    const [user] = useAuthState(auth);
    const [offset, setOffset] = useState(0);

    const handleSignOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant={offset <= 400 ? 'dark' : 'light'} bg={offset <= 400 ? '' : 'light'} sticky='top' className='headr'>
                <Container>
                    <Navbar.Brand as={Link} to='home'><img
                        src={logo}
                        width='220px'
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='nav-collapse'>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='mt-4 text-center mt-md-0'>
                            <Nav.Link as={Link} className='mx-0 mx-md-2' style={offset <= 400 ? { color: 'white' } : { color: 'black' }} to='items'>Items</Nav.Link>
                            <Nav.Link as={Link} className='mx-0 mx-md-2' style={offset <= 400 ? { color: 'white' } : { color: 'black' }} to='about'>About</Nav.Link>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} className='mx-0 mx-md-2' style={offset <= 400 ? { color: 'white' } : { color: 'black' }} to='manage'>Manage</Nav.Link>
                                        <Nav.Link as={Link} className='mx-0 mx-md-2' style={offset <= 400 ? { color: 'white' } : { color: 'black' }} to='add'>Add item</Nav.Link>
                                        <img className='rounded-circle' src={user.photoURL} width='35px' alt="" />
                                        <Nav.Link className='mx-0 mx-md-2' style={offset <= 400 ? { color: 'white' } : { color: 'black' }} onClick={handleSignOut}>Log out</Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={Link} className='mx-0 mx-md-2' style={offset <= 400 ? { color: 'white' } : { color: 'black' }} to="login">
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