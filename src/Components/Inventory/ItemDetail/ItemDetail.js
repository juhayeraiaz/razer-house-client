import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);

    return (
        <div>
            <h2 className='text-center'> Item Name: {item.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${itemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;