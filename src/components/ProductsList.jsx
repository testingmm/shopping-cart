import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useOutletContext } from 'react-router-dom';


const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { cart, setCart } = useOutletContext();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
            .finally(() => { setLoading(false) })
    }, [])


    const handleAddToCart = (product) => {
        let tempCart = [...cart];
        if (!tempCart.find(item => item.id === product.id)) {
            product.quantity = 1;
            tempCart.push(product);
            setCart(tempCart)
        }
    }

    return (
        <>
            <div className='container-fluid'>
                {loading && <div className='text-center fw-bold mb-2'>Loading...</div>}
                <div className='row p-3'>
                    {products && products.length > 0 && products.map((product) => {
                        return (
                            <div className='col-md-3 mb-3' key={product.id}>
                                <Product product={product} handleAddToCart={handleAddToCart} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductsList