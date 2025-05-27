import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import WishlistButton from "./WishlistButton";

export default function ProductCard({ product }) {
  const { dispatch } = useStore();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <div className="actions">
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
            Add to Cart
          </button>
          <WishlistButton product={product} />
        </div>
      </div>
    </div>
  );
}
