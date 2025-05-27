import React from "react";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { state, dispatch } = useStore();

  const total = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  };

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>
      {state.cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={e => handleQtyChange(item.id, Number(e.target.value))}
                  />
                </td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total:</td>
              <td></td>
              <td>${total.toFixed(2)}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      )}
    </main>
  );
}
