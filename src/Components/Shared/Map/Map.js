import React from 'react';
import GetReview from './GetReview';
import './Map.css'
const Map = () => {
    return (
        <>
            <section className="mt-5 mb-5 container">
                <h1 className="fw-bold text-center mb-5">Get Direction</h1>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                    <div className="map-responsive w-75">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29209.889613704447!2d90.41293312341234!3d23.774601843786602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7fd0322b155%3A0x641996fab4728270!2sNational%20Warehouse!5e0!3m2!1sen!2sbd!4v1651997293435!5m2!1sen!2sbd" width="800" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='mb-5' style={{ width: '370px' }}>
                        <h2 className="fw-bold text-center">Leave A Comment</h2>
                        <div className='mt-5'>
                            <GetReview></GetReview>
                        </div>
                    </div>
                </div>
            </section>
            <div className='text-center mt-5 mb-5'>
                <h2 className='fw-bold'>All Comments</h2>
            </div>
        </>
    );
};

export default Map;