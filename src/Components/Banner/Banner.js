import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

export default function App() {
    return (
        <div className='mb-5'>
            <Carousel>
                <Carousel.Item className='first-carousel-item'>
                    <div className='carousel-text px-4'>
                        <p className='text-white-50'>Welcome to</p>
                        <h1 className='carousel-title fw-bolder text-white'>Razer House</h1>
                        <p className='text-white-50'>We provide the best quality gaming chairs and accessories accross the world. <br /> Our products come in many designs and category.</p>
                        <Link to='/items'><button className='btn btn-light rounded-pill  fw-bold px-4 py-2'>Our Products</button></Link>
                        <Link to='/about'><button className='btn btn-dark text-white rounded-pill fw-bold  ms-3 px-4 py-2'>About us</button></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='second-carousel-item'>
                    <div className='carousel-text px-4'>
                        <p className='text-white-50'>Storage and capacity</p>
                        <h1 className='carousel-title fw-bolder text-white'>Mass Storage</h1>
                        <p className='text-white-50'>As a world-wide organization we need mass storage to supply everywhere in the world</p>
                        <Link to='/items'><button className='btn btn-light rounded-pill  fw-bold px-4 py-2'>Our Products</button></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='third-carousel-item'>
                    <div className='carousel-text px-4'>
                        <p className='text-white-50'>Shipping</p>
                        <h1 className='carousel-title-third fw-bolder text-white'>GROUND OR AIR,</h1>
                        <h1 className='carousel-title-third fw-bolder text-white'> THERE IS NO STOPPING FOR US</h1>
                        <p className='text-white-50'>Starting from loading to unloading and maintaining the highest standards <br /> in terms of safety while in transit, we take nothing to chance.</p>
                        <Link to='/items'><button className='btn btn-light rounded-pill  fw-bold px-4 py-2'>Our Products</button></Link>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}