import React, { createContext, useContext, useReducer, useEffect } from "react";

const StoreContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        const exist = state.cart.find(p => p.id === action.payload.id);
        let cart;
        if (exist) {
          cart = state.cart.map(p => p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p);
        } else {
          cart = [...state.cart, { ...action.payload, qty: 1 }];
        }
        return { ...state, cart };
      }
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(p => p.id !== action.payload) };

    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart.map(p =>
          p.id === action.payload.id ? { ...p, qty: action.payload.qty } : p
        ),
      };

    case "ADD_TO_WISHLIST":
      {
        if (state.wishlist.find(p => p.id === action.payload.id)) return state;
        return { ...state, wishlist: [...state.wishlist, action.payload] };
      }

    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishlist: state.wishlist.filter(p => p.id !== action.payload) };

    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
