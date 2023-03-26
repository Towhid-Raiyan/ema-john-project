import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller,ratings,price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" srcset="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;