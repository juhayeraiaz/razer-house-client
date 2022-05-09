import useItems from '../hooks/useItems';
import Item from './Item/Item';
import './Items.css';

const Items = () => {

    const [items] = useItems();
    return (
        <div id="items" className='container'>
            <div className="row">
                <h1 className='fw-bold text-center mt-5 mb-5'> Our Items</h1>
                <div className="items-container">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;