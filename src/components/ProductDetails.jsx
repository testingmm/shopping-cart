import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import './detailStyles.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const { cart, setCart } = useOutletContext();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(() => { setLoading(false) })
    }, [id]);


    const handleAddToCart = () => {
        let tempCart = [...cart];
        let p = tempCart.find(item => item.id === product.id);
        if (!p) {
            product.quantity = quantity;
            tempCart.push(product);
        } else if (p) {
            p.quantity = quantity;
        }
        setCart(tempCart)
    }

    const onSetQuantity = (e) => {
        if (e.target.id === 'plus') {
            setQuantity(q => q + 1);
        } else if (e.target.id === 'minus') {
            setQuantity(q => q - 1);
        }
    }

    return (
        <>
            {loading && <div className='text-center fw-bold mb-2'>Loading...</div>}

            <div className='container mt-5'>
                {product && (
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={product.image} alt={product.title} className='img-fluid product-image' />
                        </div>
                        <div className='col-md-6'>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p>Category: {product.category}</p>
                            <p className='fw-bold'>Price: {product.price} $</p>
                            <p>Rating: {product.rating.rate} ({product.rating.count})</p>
                            <div className='d-flex align-items-center mb-2'>
                                <button className='btn btn-sm btn-outline-secondary me-2 qtyBtn' type='button' id="minus" disabled={quantity === 0} onClick={(e) => onSetQuantity(e)}>-</button>
                                {/* <input type='number' className='form-control w-25' value={quantity} onChange={(e) => setQuantity(e.target.value)} /> */}
                                <input type='number' className='form-control form-control-sm text-center' value={quantity} />
                                <button className='btn btn-sm btn-outline-primary ms-2 qtyBtn' type='button' id='plus' onClick={(e) => onSetQuantity(e)}>+</button>
                            </div>
                            <button className='btn btn-primary' onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails