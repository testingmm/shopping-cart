import React from 'react'
import './productStyles.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product, handleAddToCart }) => {
    const navigate = useNavigate();

    const onClickAddProductToCart = () => {

        handleAddToCart(product);
    }

    const handleOnClick = (e) => {
        e.stopPropagation();
        navigate(`/products/details/${product.id}`);
    }

    return (
        <>
            {product && (
                <div className="card">
                    <img src={product.image} className="card-img-top" alt="..." onClick={handleOnClick} style={{ cursor: 'pointer' }} />
                    <div className="card-body">
                        <h5 className="card-title">{product.title.slice(0, 15)}</h5>
                        <p className="card-text">{product.description.slice(0, 50)}</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <b className="card-text align-middle">Price: {product.price}$</b>
                            <button type='button' className="btn btn-outline-primary btn-sm" onClick={(e) => onClickAddProductToCart(e)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Product