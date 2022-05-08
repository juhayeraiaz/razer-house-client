import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='mt-4 mb-5'>
            <h2 className='text-center fw-bolder text-danger'>Page Not Found</h2>
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
        </div>
    );
};

export default NotFound;