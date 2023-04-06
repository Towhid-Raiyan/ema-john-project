import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart]=useState(savedCart);
    console.log(savedCart);

    const handleRemoveFromCart = (id)=>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);

    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product ={product}
                        handleRemoveFromCart ={handleRemoveFromCart}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;