import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[]);
    useEffect(()=>{
        const storedCart= getShoppingCart();
        const savedCart =[];
        // step-1
        for(const id in storedCart){
            // step-2
            const addedProduct = products.find(product => product.id === id);
            // step-3
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step:4 
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product) =>{
        // const newCart = [...cart,product];
        let newCart =[];
        // if product does not exist in the cart then set product quantity = 1
        // if exist update quantity by 1
        const exist = cart.find(pd=>pd.id === product.id);

        if(!exist){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            exist.quantity = exist.quantity +1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist];
        }


        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key ={product.id}
                        product = {product}
                        handleAddToCart ={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}
                >
                    <Link to ='./orders'>
                        <button className='btn-proceed'>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;