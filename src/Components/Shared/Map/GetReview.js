import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';

const GetReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0);

    const ratingChanged = (event) => {
        setRating(event)
    };
    const onSubmit = async data => {
        data["rating"] = rating;
        const getReviews = {
            name: data.name,
            description: data.description,
            rating: rating
        }
        fetch(`https://vast-river-52657.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(getReviews)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='py-5 card card-body shadow-sm rounded'>
                <input required className='border text-black text-sm rounded p-2 mb-4 my-3' type="text" placeholder="name" {...register("name", {})} />
                <textarea required className='border text-black rounded p-3 mb-4 my-3' {...register("description", {})} />
                <div className='mx-auto'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={34}
                        activeColor="#ffd700"
                    />
                </div>
                <input className='btn btn-dark mt-5' type="submit" />
            </form>
        </div>
    );
};

export default GetReview;