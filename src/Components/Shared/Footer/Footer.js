import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer-view mt-5'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/juhayer.ayaz/' className='me-4 text-reset'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://twitter.com/juhayer_ayaz' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/juhayer-ayaz/' className='me-4 text-reset'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='https://github.com/juhayerayaz' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <img className='mb-4' src={logo} width='50%' alt="" />
                            <p>
                                We are a Gaming Chair Production house producing best gaming chair across the world
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <Link to='/about' className='text-reset text-decoration-none'>
                                <p>About</p>
                            </Link>
                            <Link to='/items' className='text-reset text-decoration-none'>
                                <p>Items</p>
                            </Link>
                            <Link to='/blogs' className='text-reset text-decoration-none'>
                                <p>Blogs</p>
                            </Link>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> New York, NY 10012, US
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                info@example.com
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> + 01 234 567 88
                            </p>
                            <p>
                                <i className='fas fa-print me-3'></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold text-decoration-none' href='/#'>
                    Razerhouse.com
                </a>
            </div>
        </MDBFooter>
    );
}