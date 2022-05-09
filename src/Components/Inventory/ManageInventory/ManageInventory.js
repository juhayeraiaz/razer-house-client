import React from 'react';
import useItems from '../../hooks/useItems';

const ManageInventory = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://vast-river-52657.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(service => service._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Inventory</h2>
            {
                items.map(item => <div key={item._id}>
                    <h5>{item.name} <button className='btn btn-outline-dark' onClick={() => handleDelete(item._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageInventory;