import { Carousel } from 'react-bootstrap';
import { useQuery } from 'react-query';
import './ShowReviews.css'
import Loading from '../Loading/Loading';
import ReviewCard from './ReviewCard';

const ShowReviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://razer-house.onrender.com/reviews',)
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center fw-bold my-5'>User Reviews</h1>
            <div className='reviews-container'>
                <Carousel variant='dark'>
                    {reviews.map(review => {
                        return <Carousel.Item>
                            <ReviewCard
                                key={review._id}
                                review={review}
                            ></ReviewCard>
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        </div>
    );
};

export default ShowReviews;