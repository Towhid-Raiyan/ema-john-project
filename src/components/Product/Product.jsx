import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, ratings, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price :${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;