import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
const URL='https://fakestoreapi.com/products'

function ProductDetail(props) {
    const {pid}=useParams()
    console.log(pid);
    const dispatch =useDispatch()

    const fetchProducts=async()=>{
        const response =await axios.get(`${URL}/${pid}`)
      // dispatch(setProducts(response.data))
      console.log(response.data)
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    //console.log(products);
    return (
        <div >
            <p> details: {pid}</p>
        </div>
    );
}

export default ProductDetail;