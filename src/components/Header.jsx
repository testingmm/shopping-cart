import React from 'react'
import { FaBagShopping } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ cartItems }) => {
    const navigate = useNavigate();

    const cartIconStyle = {
        fontSize: '22px',
        cursor: 'pointer'
    }

    const goToCart = () => {
        navigate('/cart');
    }
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <div className="col-md-3 mb-2 mb-md-0">
                        <b>Shopping Cart</b>
                    </div>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to='/' className="nav-link px-2 link-secondary">Home</Link></li>
                        <li><Link to='/products' className="nav-link px-2">Products</Link></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <FaBagShopping style={cartIconStyle} onClick={goToCart} /> <sup>
                            <span className='badge bg-primary'>{cartItems.length}</span>
                        </sup>
                    </div>
                </header>
            </div>
        </>
    )
}

Header.propTypes = {
    cartItems: PropTypes.array
}

export default Header