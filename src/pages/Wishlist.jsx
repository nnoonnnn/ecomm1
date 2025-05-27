import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return <p>Your wishlist is empty.</p>;
  }

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
