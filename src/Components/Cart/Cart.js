import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    console.log(product.price);
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  console.log(tax);
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2 className="title">Order Summary</h2>
      <p>Selected Items : {cart.length}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping : ${shipping}</p>
      <p>Tax : ${tax}</p>
      <h3>Grand Total : ${grandTotal}</h3>
    </div>
  );
};

export default Cart;
