import React, { useEffect } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../redux/actions/productActions';

const URL = 'https://fakestoreapi.com/products'

function ProductList(props) {
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    //console.log(products);
    return (
        <div className='ui grid container'>
            <Product />
        </div>
    );
}

export default ProductList;