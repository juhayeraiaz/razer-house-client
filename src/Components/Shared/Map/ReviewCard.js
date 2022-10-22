import React from 'react';
import ReactStars from 'react-rating-stars-component';
import image from './profile.png'
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    return (
        <div class="mx-auto my-5 align-items-center d-flex flex-column overflow-hidden p-4" style={{ width: '34vmax', height: '24rem' }}>
            <img src={image} style={{ width: '7vmax' }} alt="" />
            <div className='card-body'>
                <div className="text-center d-flex flex-column align-items-center mt-3">
                    <h1 className="fw-bold" style={{ fontSize: "4vmin" }}>{review.name}</h1>
                    <p className="mt-2 fs-5" data-toggle="tooltip" data-placement="top" title={review.description}>{review.description.length >= 100 ? review.description.slice(0, 100) : review.description}</p>
                    <div>
                        <ReactStars
                            edit={false}
                            count={5}
                            value={review.rating}
                            size={34}
                            activeColor="#ffd700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;