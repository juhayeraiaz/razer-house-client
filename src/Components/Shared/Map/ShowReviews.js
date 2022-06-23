import { Carousel } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import ReviewCard from './ReviewCard';

const ShowReviews = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://vast-river-52657.herokuapp.com/reviews',)
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center fw-bold my-5'>User Reviews ({reviews.length})</h1>
            <div className='bg-dark bg-opacity-25 container-fluid'>
                <Carousel>
                    {reviews.map(review => <Carousel.Item> <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard></Carousel.Item>)}
                </Carousel>
            </div>
        </div>
    );
};

export default ShowReviews;