import React from "react";
import { useStore } from "../context/StoreContext";

export default function WishlistButton({ product }) {
  const { state, dispatch } = useStore();
  const isInWishlist = state.wishlist.some(p => p.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  return (
    <button onClick={toggleWishlist} className={`wishlist-btn ${isInWishlist ? "active" : ""}`}>
      {isInWishlist ? "❤️ Remove" : "🤍 Add to Wishlist"}
    </button>
  );
}
// import { useContext } from "react";
// import { WishlistContext } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => addToWishlist(product)}>❤️ Add to Wishlist</button>
    </div>
  );
};
