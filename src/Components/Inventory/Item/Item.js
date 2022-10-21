import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, img, description, price, supplier, quantity } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='card mb-3 border-0 rounded shadow bg-light'>
            <div className='row g-0'>
                <div className='col-md-7'>
                    <img className='img-card' src={img} alt="" />
                </div>
                <div className='col-md-5'>
                    <div className='card-body'>
                        <h3 className='card-title'>{name}</h3>
                        <p className='fw-bold fs-5'><small>Price: ${price}</small></p>
                        <p>Supplier Name: {supplier}</p>
                        <p>Stock Available: {quantity}</p>
                        <p><small>{description}</small></p>
                    </div>
                </div>
                <button onClick={() => navigateToItemDetail(_id)} className='custom-btn btn btn-dark btn-lg py-3'>Stock Update: {name}</button>
            </div>
        </div>
    );
};

export default Item;