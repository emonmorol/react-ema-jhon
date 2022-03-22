import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  // const { product, handleAddToCart } = props;
  const { name, seller, price, ratings, img } = product;
  // console.log(props);
  return (
    <div className="product">
      <img src={img} alt="#" />
      <div className="product-info">
        <div className="product-title">
          <p className="product-name">{name}</p>
          <p className="product-price">Price: {price}</p>
        </div>
        <div className="product-detail">
          <p>
            <small>Seller: {seller}</small>
          </p>
          <p>
            <small>Ratings: {ratings}</small>
          </p>
        </div>
      </div>
      <button className="button-cart" onClick={() => handleAddToCart(product)}>
        <p>
          Add To Cart{" "}
          <FontAwesomeIcon
            className="icons"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Product;
