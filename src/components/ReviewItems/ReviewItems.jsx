import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItems.css';

const ReviewItems = ({product,handleRemoveFromCart}) => {
    const {id,name,img,price,quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Order Quantity: <span className='text-orange'>{quantity}</span></p>
            </div>
            <button onClick ={()=>handleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItems;