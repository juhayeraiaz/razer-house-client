import React, { useEffect, useState } from 'react';
import './ItemDetail.Module.css'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://vast-river-52657.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    },)
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
                toast.success('Item Delivered!');
                event.target.reset();
            })
    }
    const handleRestock = event => {
        event.preventDefault();
        const number = event.target.number.value;
        if (number <= 100) {
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
                    toast.success(`${number} Items Restocked`);
                    event.target.reset();
                })
        }
        else {
            toast.error('More than 100 not possible')
        }

    }
    return (
        <div className='my-5'>
            <div className='card mb-3 border-0 rounded shadow bg-light mx-4'>
                <div className='row g-5'>
                    <div className='col-md-6'>
                        <img className='img-card' src={item.img} alt="" />
                    </div>
                    <div className='col-md-6 pb-5 pb-lg-0'>
                        <div className='card-body text-center text-md-start'>
                            <h3 className='card-title fw-bold fs-2'>{item.name}</h3>
                            <p className='fw-bold fs-5'><small>Price: ${item.price}</small></p>
                            <p>Supplier Name: {item.supplier}</p>
                            <p>Stock Available: {item.quantity}</p>
                            <p><small>{item.description}</small></p>
                            <input type="button" value="Deliver" onClick={handleDeliver} className='btn btn-dark btn-lg' />
                        </div>
                        <form onSubmit={handleRestock} className='mt-3 text-center text-md-start'>
                            <input type="number" name='number' placeholder='input amount' className='mx-3 p-2 rounded-4 border shadow-sm' required />
                            <input type="submit" value="Restock" className='btn btn-dark btn-lg' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;