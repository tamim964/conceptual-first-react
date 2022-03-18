import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';

const Products = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)
    return (
        <div>
            <div className='row'>
                {
                    products.map(product => <Single product={product} setCartCount={props.setCartCount} key={props.id} ></Single>)
                }
            </div>


        </div>
    );
};

export default Products;