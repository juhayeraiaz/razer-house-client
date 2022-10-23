import React from 'react';
import './Brief.css'

const Brief = () => {
    return (
        <div className='container d-grid py-5'>
            <div className='row'>
                <div className='col-md-6 container-fluid'>
                    <h1 className='fw-bold'>At <span className='text-primary text-opacity-50'>Warehouse</span>, we provide a unique solution for warehousing space for business and consumers
                    </h1>
                    <hr className='line' />
                    <p className='text-black-50'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        <br />
                        <br />
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className='btn btn-dark p-2'>Read More</button>
                </div>
                <div className='col-md-6'>
                    <img className='img-fluid' src="https://warehouse-admin-dashboard.multipurposethemes.com/images/front-end-img/about-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brief;