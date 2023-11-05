import React, { useContext } from 'react';
import "./CartWidget.css"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'



const CartWidget = () => {

    const {totalQuantity, cart} = useContext(CartContext)

    return (
        <Link to="/cart" className="cartWidget" >
        <div className="cart-item"> 
        {cart.length}
            <i className="bi bi-cart2 cart-img">
            </i>
        </div>
        </Link>
    );
}

export default CartWidget;

