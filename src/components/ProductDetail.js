import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiCall from '../apis/apiCall'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {seelectedProduct, fetchIndividualProducts, addToCart} from '../redux/actions/productActions'

const URL = 'https://fakestoreapi.com/products';



function ProductDetail(props) {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product);
    const { pid } = useParams();
    const { _id, title, category, price, image,description } = product



    // const fetchProducts = async () => {
    //     try {
    //         const response = await apiCall.get(`/products/${pid}`); 
    //         dispatch(seelectedProduct(response.data))
    //     } catch (error) {
    //         console.error('Error fetching product:', error);
    //     }
    // };

    useEffect(() => {
        dispatch(fetchIndividualProducts(pid))
    }, [pid]);

    const navigate = useNavigate();

    const handleaddtoCart = () => {
        const cartProduct = { _id, title };
        console.log('Current product to add:', cartProduct);
        dispatch(addToCart(cartProduct));
    }
    const cart = useSelector(state => state.cart);
    console.log(cart);
    const goToProductDetail = (id) => {
        navigate(`/`);
    };


    return (

        <div className='ui grid container'>
            <button onClick={goToProductDetail} >BACK TO HOME</button>
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'></div>
                    <div className='middle aligned row'>
                        <div className='column 1p'>
                            <img className='ui fluid image' src={image} /></div>
                        <div className='column rp'>
                            <h1>{title}</h1>
                            <h2>
                                <a className='ui teal tag label'>${price}</a>
                            </h2>
                            <h3 className='ui brown block header'>{category}</h3>
                             <p>{description}</p> 
                            <div className='ui vertical animated button' tabIndex='0' onClick={handleaddtoCart}>
                                <div className='hidden content'>
                                    <i className='shop icon'></i>
                                </div>
                                <div className='visible content'>Add To Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;