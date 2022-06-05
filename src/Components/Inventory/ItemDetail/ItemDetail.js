import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://vast-river-52657.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item])
    const handleDeliver = event => {
        const quantity = item.quantity - 1;

        const updatedUser = { quantity };

        // send data to the server
        const url = `https://vast-river-52657.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                alert('Item Delivered');
                event.target.reset();
            })
    }
    const handleRestock = event => {
        event.preventDefault();
        const number = event.target.number.value;
        const quantity = item.quantity + parseInt(number);

        const updatedUser = { quantity };

        // send data to the server
        const url = `https://vast-river-52657.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
            })
    }
    return (
        <div className='container text-center mt-5 mb-5'>
            <img className='w-25' src={item.img} alt="" />
            <h2 className='text-center mt-2'>Name: {item.name}</h2>
            <h4 className='text-center mt-2'>Id: {item._id}</h4>
            <h4 className='text-center mt-2'>Supplier Name: {item.supplier}</h4>
            <h4 className='text-center mt-2'>Quantity: {item.quantity}</h4>
            <input type="button" value="Delivered" onClick={handleDeliver} className='btn btn-outline-dark' />
            <form onSubmit={handleRestock} className='mt-3'>
                <input type="text" name='number' className='mx-3' required />
                <input type="submit" value="Restock" className='btn btn-outline-dark' />
            </form>
        </div>
    );
};

export default ItemDetail;