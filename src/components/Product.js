import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

function Product(props) {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    const handleAddToCart = (_id, title) => {
        const cartProduct = { _id, title };
        console.log('Current product to add:', cartProduct);
        dispatch(addToCart(cartProduct));
    };

    const renderList = products.map((product) => {
        const { _id, title, category, image, price } = product;
        console.log(_id);
        return (
            <div className='four wide column' key={_id}>
                <Link to={`/product/${_id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='meta price'>${price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div onClick={() => handleAddToCart(_id, title)} className='ui vertical animated button' tabIndex='0'>
                    <div className='hidden content'>
                        <i className='shop icon'></i>
                    </div>
                    <div className='visible content'>Add To Cart</div>
                </div>
            </div >
        );
    });

    return (
        <>
            {renderList}
        </>
    );
}

export default Product;