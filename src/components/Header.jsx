import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const { state } = useStore();
  const cartCount = state.cart.reduce((acc, item) => acc + item.qty, 0);
  const wishlistCount = state.wishlist.length;

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">eComm</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/wishlist">
              Wishlist <span className="count">{wishlistCount}</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              Cart <span className="count">{cartCount}</span>
            </Link>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>
    </header>
  );
}
