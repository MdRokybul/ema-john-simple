import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const product = cart[index];
        total = total + product.price;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Total price: {total} </p>
        </div>
    );
};

export default Cart;