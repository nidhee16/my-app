import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiCall from '../apis/apiCall';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const { pid } = useParams();
    const navigate = useNavigate(); 
    const { id, title, category, price, image, description } = product || {};

    const fetchProduct = async () => {
        try {
            const response = await apiCall.get(`/products/${pid}`);
            dispatch(selectedProduct(response.data));
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        if (pid) {
            fetchProduct();
        }
    }, [pid]);

    const backToHome = () => {
        navigate('/'); // Ensure useNavigate is used correctly
    };

    return (
        <div className="ui grid container">
            <button onClick={backToHome}>Back To Home</button>
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider"></div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={image} alt={title} />
                        </div>
                        <div className="column rp">
                            <h1>{title}</h1>
                            <h2>
                                <a className="ui teal tag label">${price}</a>
                            </h2>
                            <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add To Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
