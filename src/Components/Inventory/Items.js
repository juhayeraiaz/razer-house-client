import React, { useEffect, useState } from 'react';
import Item from './Item/Item';
import './Items.css';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://vast-river-52657.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div id="items" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Items</h1>
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