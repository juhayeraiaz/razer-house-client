import React from 'react';
import ReactStars from 'react-rating-stars-component';
import image from './profile.png'
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
    return (
        <div class="mx-auto my-5 shadow card align-items-center border-0 flex-row p-5 card-width">
            <img src={image} style={{ width: '20vmax' }} alt="" />
            <div className='card-body'>
                <div className="text-center d-flex flex-column align-items-center">
                    <h1 className="fw-bold" style={{ fontSize: "4vmin" }}>{review.name}</h1>
                    <p className="mt-2 fs-5">{review.description}</p>
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