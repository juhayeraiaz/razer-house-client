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
        <div className='item'>
            <img className='w-100 h-50' src={img} alt="" />
            <h3 className='fw-bold mt-3'>{name}</h3>
            <p className='fw-bold fs-5'><small>Price: ${price}</small></p>
            <p>Supplier Name: {supplier}</p>
            <p>Stock Available: {quantity}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-outline-dark'>Stock Update: {name}</button>
        </div>
    );
};

export default Item;