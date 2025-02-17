import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const { cart } = useOutletContext();

    const handleCheckout = () => {
        navigate('/checkout');
    }
    return (
        <>
            <div className='container mb-3'>
                <div className='row'>
                    <div className='col-7'>
                        {cart && cart.length === 0 && <h4 className='text-center'>Cart is empty</h4>}
                    </div>
                    {cart && cart.length > 0 && cart.map((product) => {
                        return (
                            <div className='col-12 mb-3' key={product.id}>
                                <div className="card mb-3" style={{ maxWidth: "750px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4 p-2">
                                            <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <span className="card-text">Quantity: {product.quantity}</span>
                                                    <b className="card-text">Price: {product.price} $</b>
                                                </div>
                                                <div className='text-end mt-2 border-top pt-2'><b className="card-text">Total: {product.price * product.quantity} $</b></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className='col-7 border-top py-3 text-end'>
                        <b>Total: {cart.reduce((acc, product) => acc + product.price * product.quantity, 0)} $</b>
                    </div>
                    <div className='col-7 border-top pt-2 text-end'>
                        <button type='button' className='btn btn-primary' onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart