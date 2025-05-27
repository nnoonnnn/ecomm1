import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useStore } from "../context/StoreContext";

export default function ProductDetails() {
  const { id } = useParams();
 const product = products.find((p) => p.id === parseInt(id));

  const { dispatch } = useStore();

  if (!product) return <p>Product not found.</p>;

  return (
    <main className="product-details">
      <img src={product.image} alt={product.name} />
      <section>
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
          Add to Cart
        </button>
      </section>
    </main>
  );
}
